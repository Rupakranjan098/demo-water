from PIL import Image

def remove_black_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Calculate luminance
        lum = 0.299*item[0] + 0.587*item[1] + 0.114*item[2]
        
        if lum < 20: # Very dark threshold
            # Make it transparent but keep the color for smooth edge
            alpha = int((lum / 20.0) * 255)
            newData.append((item[0], item[1], item[2], alpha))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

remove_black_bg('public/water-bottles.png', 'public/water-bottles-trans.png')
