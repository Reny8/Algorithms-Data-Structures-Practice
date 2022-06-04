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
   for item in first_list:
        if item in second_list:
            return True
        return False

# print(common_items(letters_1, letters_2))

def pair_equals_sum(list_of_numbers, total): 
    new_list = []
    for x in list_of_numbers:
        if x in new_list:
            return True
        new_list.append(total - x)
    return False

print(pair_equals_sum([1,2,3,4,5,6], 10))

