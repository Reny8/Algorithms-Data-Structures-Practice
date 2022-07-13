# IDENTFY BASE CASE
# IDENTIFY THE RECURSIVE CASE
# RETURN WHEN NEEDED USUALLY WITH TWO RETURNS 
def inception(counter):
    if counter == 3:
        return print("Done")
    counter += 1
    print(counter)
    return inception(counter)

times = 0
inception(times)

