import random

### 로또 번호 생성
def lotto_numbers():
   numbers = random.sample(range(1, 46), 6)
   numbers.sort()
   print(numbers)

lotto_numbers()