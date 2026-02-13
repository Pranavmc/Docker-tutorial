def get_data():
    with open('names.txt', 'r') as f:
        names=f.read()
        names=names.split()
        return names
        
