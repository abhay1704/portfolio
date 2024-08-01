import json

f = json.load(open('./material-theme.json', 'r'))

# # print(f['schemes'])


# for name, color in f['schemes']['light'].items():
#     new_colors[name] = {
#         'light': color,
#         'dark': f['schemes']['dark'][name],
#         'DEFAULT':f['schemes']['dark'][name]
#     }

# # print(new_colors)

# with open('abhay\material-theme.json', 'w') as file:
#     json.dump(new_colors, file, indent=4)
newStyle = ""





for name, color in f.items():

    newStyle += f'''
        .bg-{name} {{
            background-color: {color['light']};
        }}

        .dark .bg-{name} {{
            background-color: {color['dark']};
        }}

        .text-{name} {{
            color: {color['light']};
        }}

        .dark .text-{name} {{
            color: {color['dark']};
        }}
    '''

with open('./colors.css', 'w') as file:
    file.write(newStyle)
