import os

def list_files_sorted_by_creation(folder_path):
    """Returns a list of all files in the given folder, sorted by creation date (oldest first)."""
    try:
        files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
        files.sort(key=lambda f: os.path.getctime(os.path.join(folder_path, f)))
        return files
    except FileNotFoundError:
        print(f"Error: The folder '{folder_path}' does not exist.")
        return []

# Example usage:
folder_path = "./images/sponsors"  # Change this to your target folder
files = list_files_sorted_by_creation(folder_path)
print(files)
