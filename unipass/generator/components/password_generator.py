import random
import string
from django_unicorn.components import UnicornView


class PasswordGeneratorView(UnicornView):
    password: str = ""
    length: int = 12
    include_digits: bool = True
    include_special_chars: bool = True

    def generate_password(self):
        characters = string.ascii_letters
        if self.include_digits:
            characters += string.digits
        if self.include_special_chars:
            characters += string.punctuation

        self.password = "".join(random.choice(
            characters) for _ in range(self.length))

    def copy_to_clipboard(self):
        self.call("copyToClipboard", self.password)
