# INSERTION SORT PRACTICE 
# PERFORMS WELL WITH SMALL AMOUNT OF DATA
from turtle import right


numbers = [99,44,6,2,1,5,63,87,283,4,0]
def insertion_sort(list):
    for i in range(1, len(list)):
        key = list[i]
        # Move elements of list[0..i-1], that are
        # greater than key, to one position ahead
        # of their current position
        j = i-1
        while j >=0 and key < list[j] :
                list[j+1] = list[j]
                j -= 1
        list[j+1] = key
    return list

# test = insertion_sort(numbers)
# print(test)

# MERGE SORTING PRACTICE
def merge_sort(list):
    # BASE CASE
    length = len(list)
    if length == 1:
        return list
    # SPLIT THE LIST INTO RIGHT AND LEFT
    middle = int(length/2)
    return merge(
        merge_sort(list[:middle]), 
        merge_sort(list[middle:])
    )
def merge(left, right):
# COMPARSION FOR THE NUMBERS FROM THE RIGHT AND LEFT LIST
    output = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            output.append(left[i])
            i += 1
        else:
            output.append(right[j])
            j += 1
    output.extend(left[i:])
    output.extend(right[j:])
    return output
sorted = merge_sort(numbers)
print(sorted)