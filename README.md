# translate-google-forms
AppScript code for translating Google Forms to other languages.

**WARNING: Translating a Form WILL overwrite the original Form.**

Add this script in the AppScript editor when creating the Google Form. Go to the 3 dots in the top right of the page and choose "<> script editor".

Paste the "translate-google-forms" code in to the editing area. Be sure to first remove the default blank function.

You can change the to and from languages in the first function where it says "sourceLanguage" and "targetLanguage". See https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes#Table for all possible two-letter codes (the second column of the table, labelled "Set 1")

After setting the source and target languages, save the script and press "Run". The first time you do it on a Form, you will have to give it permission. That is okay to do, as the script does not contact anything or anyone outside of Google.

**Translating a Form WILL overwrite the original Form.** Be sure to make a copy of the form first if you need it in the original source language.

Note that currently (as of October 2024), there is no way to change the labels of scales. There may be other cases too, where some text is not translated. Always double check and manually translate if needed.
