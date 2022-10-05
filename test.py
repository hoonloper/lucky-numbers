import random

lotto = [i for i in range(1, 46)]

random.shuffle(lotto)

print(sorted(lotto[0:6]))