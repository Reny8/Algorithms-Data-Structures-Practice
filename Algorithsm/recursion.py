
def inception(counter):
    if counter == 3:
        return print("Done")
    counter += 1
    print(counter)
    inception(counter)

times = 0
inception(times)
