# INSERTION SORT PRACTICE 
# PERFORMS WELL WITH SMALL AMOUNT OF DATA
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

test = insertion_sort(numbers)
print(test)