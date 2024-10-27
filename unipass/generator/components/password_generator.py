import secrets
import string
from django_unicorn.components import UnicornView


class PasswordGeneratorView(UnicornView):
    password: str = ""
    password_options: list = []
    length: int = 12
    include_digits: bool = True
    include_special_chars: bool = True

    def generate_password(self):
        """
        Generates the main password and password options depending on
        the selected options (length, inclusion of numbers,
        inclusion of special characters).
        """
        characters = string.ascii_letters
        if self.include_digits:
            characters += string.digits
        if self.include_special_chars:
            characters += string.punctuation

        # Generating the main password
        self.password = "".join(
            secrets.choice(characters) for _ in range(self.length))

        # Generating password options
        self.password_options = [
            "".join(secrets.choice(
                characters) for _ in range(
                    self.length)) for _ in range(10)
        ]

    def copy_to_clipboard(self, text):
        """
        Copies the given text to the user's clipboard using the
        `copyToClipboard` function from the `clip.js` script.

        :param text: The text to copy to the user's clipboard
        """
        self.call("copyToClipboard", text)
