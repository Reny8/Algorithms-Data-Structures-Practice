# Collect the first and last post
# Space Complexity example working with different factors
# lists, function
posts = ['hello, Just signed up!', 'Just watched a movie', 'Will be watching the new show tonight']
def first_and_last(list):
    print(list[1])
    print(list[-1])

# first_and_last(posts)

# Given 2 arrays, create a function that let's a user know whether these two arrays contain any common items
# arrays with no size limit
letters_1 = ["a", "b", "c", "x"]
letters_2 = ["z", "y", "f"]
def common_items(first_list, second_list):
    new_object = {}
    for item in range(0, len(first_list)):
        if first_list[item] not in new_object:
            new_item = first_list[item]
            new_object[new_item] = True
    for item in range(0, len(second_list)):
        if second_list[item] in new_object:
            return True
    return False
print(common_items(letters_1, letters_2))
