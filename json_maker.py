import os
import json

def create_music_json(directory):
    music_list = []
    songIndex = 0
    artist = ''
    title = ''

    # Get all .mp3 files in the directory
    for filename in os.listdir(directory):
        if filename.endswith(".mp3"):
            file_path = os.path.join(directory, filename)
            full_title = os.path.splitext(filename)[0]  # Extract title from filename
            res = full_title.split('-')
            title = res[0].strip().title()
            artist = res[1].strip().title()

            # Create JSON object for each file
            music_data = {
                "songIndex": songIndex,
                "backgroundImage": "./assets/images/poster-1.jpg",
                "posterUrl": "./assets/images/poster-1.jpg",
                "title": title,
                "album": "Not Found",
                "year": 2024,
                "artist": artist,
                "musicPath": file_path
            }
            music_list.append(music_data)
            songIndex = songIndex + 1

    # Write music_list to JSON file
    with open('music_data.json', 'w') as f:
        json.dump(music_list, f, indent=2)

# Directory containing .mp3 files
music_directory = './assets/music/'

# Create JSON file
create_music_json(music_directory)
