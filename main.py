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

# print(pair_equals_sum([1,2,3,4,5,6], 10))
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Find the index of a value in a sorted array. 
list_of_numbers= [3,5,4,2,6,7,8]
list_of_numbers.sort()

def find_index_for_number(list, number):
    if number in list:
        return list.index(number)
    elif number not in list:
        list.append(number)
        return list.index(number)
    
# print(find_index_for_number(list_of_numbers, 5))
# print(find_index_for_number(list_of_numbers, 9))

# Finding repeating letters in a string
def repeating_characters(string_to_check):
    string_to_array = []
    count = 1
    for item in string_to_check:
        if item in string_to_array:
           count += 1
        string_to_array.append(item)
    if count != 1:
        return f"A letter was repeated {count} times"
    return "No letters were repeated"
    
# repeats = repeating_characters("running")
# print(repeats)

#  write a program that is going to validate password hased on following rules
#  password length must be greater than 8
# password must have at least these special character only (-,+,=,{,[,\)
# password must have at least capital letter, excluding the first and last location

def validate_password():
    valid_length_and_symbol = False # O(1)
    valid_cap = False # O(1)
    while valid_length_and_symbol == False or valid_cap == False:
        entered_pass = input("Enter a password greater than 8, with at least one of these symbols (-,+.=,{,[) and must have a capital excluding first and last\n") 
        for item in entered_pass: #O(n)
            if item in ["-","+","=","{","["]  and len(entered_pass) >= 8:
                valid_length_and_symbol = True
            if item.upper() in entered_pass[1:-1]:
                valid_cap = True
    return print("Password Saved Successfully")

# validate_password()



# makes string of numbers into a phone number
def string_to_cell(numbers):
    area_code = ''
    middle = ''
    last_four = ''
    if len(numbers) == 10:
        for num in numbers [0:3]:
            area_code += num
        for num in numbers [3:6]:
            middle += num
        for num in numbers [6:10]:
            last_four += num
    print(f'({area_code}) {middle} - {last_four}')

# string_to_cell("1234567890")

# MERGING ARRAYS FUNCTION
def merge_arrays(first_array, second_array):
    for item in second_array:
        first_array.append(item)
    first_array.sort()
    print(first_array)
# merge_arrays([0,1,2,3,4], [16,23,30])

# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.
# Example 1:
# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
def target_sum(numbers_array, target):
    index_sums = []
    for number in numbers_array:
        if (target - number) in numbers_array:
            index_sums.append(numbers_array.index(number))
            index_sums.append(numbers_array.index(target - number))
            break     
    return index_sums

sum_list = target_sum([2,7,11,15], 9)
print(sum_list)