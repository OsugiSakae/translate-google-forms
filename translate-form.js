// This most recent version of this script is available at 
// https://github.com/OsugiSakae/translate-google-forms/new/main
// This is version 0.0.1, published on 2024-10-19

// This script is published under a GPL 3.0 license. Full text is available at
// https://github.com/OsugiSakae/translate-google-forms/new/main

// This script comes with NO WARRANTY. If it causes your computer to burst into flames,
// there was something very wrong with your computer that this script had nothing to do with.

function translateForm() {
  // Set the source and target languages here
  // See https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes#Table
  // for all possible two-letter codes (the second column of the table, labelled "Set 1")
  var sourceLanguage = 'en';
  var targetLanguage = 'ja';

  // this is just for the final success message.
  var sourceLanguageFull = 'English';
  var targetLanguageFull = 'Japanese';

  // Get the current form
  var form = FormApp.getActiveForm();

  // Translate the form title and description
  var title = form.getTitle();
  var description = form.getDescription();
  form.setTitle(LanguageApp.translate(title, sourceLanguage, targetLanguage));
  form.setDescription(LanguageApp.translate(description, sourceLanguage, targetLanguage));

  // Get all the items in the form
  var items = form.getItems();

  // Loop through each item in the form
  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    try {
      // Translate item title based on item type
      switch (item.getType()) {
        case FormApp.ItemType.TEXT:
          item.asTextItem().setTitle(LanguageApp.translate(item.getTitle(), sourceLanguage, targetLanguage));
          break;
        case FormApp.ItemType.PARAGRAPH_TEXT:
          item.asParagraphTextItem().setTitle(LanguageApp.translate(item.getTitle(), sourceLanguage, targetLanguage));
          break;
        case FormApp.ItemType.MULTIPLE_CHOICE:
          item.asMultipleChoiceItem().setTitle(LanguageApp.translate(item.getTitle(), sourceLanguage, targetLanguage));
          // Translate choices for Multiple Choice items
          var choices = item.asMultipleChoiceItem().getChoices();
          var translatedChoices = [];
          for (var j = 0; j < choices.length; j++) {
            var choiceText = choices[j].getValue();
            var translatedChoice = LanguageApp.translate(choiceText, sourceLanguage, targetLanguage);
            translatedChoices.push(translatedChoice);
          }
          item.asMultipleChoiceItem().setChoiceValues(translatedChoices);
          break;
        case FormApp.ItemType.CHECKBOX:
          item.asCheckboxItem().setTitle(LanguageApp.translate(item.getTitle(), sourceLanguage, targetLanguage));
          // Translate choices for Checkbox items
          var choices = item.asCheckboxItem().getChoices();
          var translatedChoices = [];
          for (var j = 0; j < choices.length; j++) {
            var choiceText = choices[j].getValue();
            var translatedChoice = LanguageApp.translate(choiceText, sourceLanguage, targetLanguage);
            translatedChoices.push(translatedChoice);
          }
          item.asCheckboxItem().setChoiceValues(translatedChoices);
          break;
        case FormApp.ItemType.LIST:
          item.asListItem().setTitle(LanguageApp.translate(item.getTitle(), sourceLanguage, targetLanguage));
          // Translate choices for List items
          var choices = item.asListItem().getChoices();
          var translatedChoices = [];
          for (var j = 0; j < choices.length; j++) {
            var choiceText = choices[j].getValue();
            var translatedChoice = LanguageApp.translate(choiceText, sourceLanguage, targetLanguage);
            translatedChoices.push(translatedChoice);
          }
          item.asListItem().setChoiceValues(translatedChoices);
          break;
        case FormApp.ItemType.SCALE:
          item.asScaleItem().setTitle(LanguageApp.translate(item.getTitle(), sourceLanguage, targetLanguage));
          break;
        case FormApp.ItemType.GRID:
          item.asGridItem().setTitle(LanguageApp.translate(item.getTitle(), sourceLanguage, targetLanguage));
          break;
        case FormApp.ItemType.DATE:
          item.asDateItem().setTitle(LanguageApp.translate(item.getTitle(), sourceLanguage, targetLanguage));
          break;
        case FormApp.ItemType.TIME:
          item.asTimeItem().setTitle(LanguageApp.translate(item.getTitle(), sourceLanguage, targetLanguage));
          break;
        default:
          Logger.log("Unsupported item type: " + item.getType());
      }
    } catch (e) {
      Logger.log("Error processing item: " + e.message);
    }
  }

  // Log the completion
  Logger.log("Form successfully translated from " + sourceLanguageFull + " to " + targetLanguageFull + "!");
}
