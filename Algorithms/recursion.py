# IDENTFY BASE CASE
# IDENTIFY THE RECURSIVE CASE
# RETURN WHEN NEEDED USUALLY WITH TWO RETURNS 
def inception(counter):
    if counter == 3:
        return print("Done")
    counter += 1
    print(counter)
    return inception(counter)
# times = 0
# inception(times)

# WRITE TWO FUNCTIONS THAT FIND THE FACTORIAL OF ANY NUMBER.
# ONE SHOULD USE RECURSIVE, THE OTHER SHOULD JUST USE A FOR LOOP

def find_factorial_recursive(number,answer=1):
    if number == 1:
        return print(answer)
    answer *= number
    number -= 1
    return find_factorial_recursive(number,answer)
# find_factorial_recursive(2)

def find_factorial_iterative(number):
    answer = number
    for num in range((number-1), 1,-1):
        answer *= num
    return print(answer)
# find_factorial_iterative(5)

def recurringNumber(array):
    hash_table = {}
    for num in array:
        try:
            if hash_table[num] != None:
                return num
        except KeyError:
            hash_table[num] = True

# recurringNumber([2,1,5,3,2,1])
# repeat = recurringNumber([1,2,3,4])
# print(repeat)

# FIBONACCI USING RECURSION
def fibo(n):
    numbers = {0:0,1:1}
    if n in numbers:  # Base case
        return numbers[n]
    numbers[n] = fibo(n - 1) + fibo(n - 2)  # Recursive case
    return numbers[n]

result = [fibo(n) for n in range(2)]
print(result)

# FIBONACCI USING ITERATION
def fibonacci_iterative(n):
    pass

# fibonacci_iterative(8)