const mammoth = require('mammoth');
const cheerio = require('cheerio');

async function getCustomizationsAndChangeFiles() {
  const result = await mammoth.convertToHtml({ path: 'Survey_Customization_Form.docx' });
  const html = result.value;
  const $ = cheerio.load(html);

  // Get the array of 2D arrays of tables from the .docx file.
  const tables = [];
  $('table').each(function (i, elem) {
    const table = [];
    $(this)
      .find('tr')
      .each(function (i, elem) {
        const row = [];
        $(this)
          .find('td')
          .each(function (i, elem) {
            row.push($(this).text().trim());
          })
        table.push(row);
      })
    tables.push(table);
  })

  // Changing the strings in the tables to add \ for \ and "
  tables.forEach((table) => {
    table.forEach((row, i) => {
      row.forEach((str, j) => {
        // Replace all instances of \ with \\
        let newStr = str.replace(/\\/g, '\\\\');
        
        // Then replace all instances of " with \"
        newStr = str.replace(/"/g, '\\"');
        
        // Update the string in the array
        table[i][j] = newStr;
      });
    });
  });

  const fs = require('fs');

    const settingsLines = []

    settingsLines.push("// Everything in here is publicly accessible");
    settingsLines.push("\n");
    settingsLines.push("const settings = {");
    settingsLines.push("\tbenefitCategories: [");
    
    settingsLines.push("\t\t{");
    settingsLines.push("\t\t\tkey: 'ridership',");
    settingsLines.push("\t\t\ttext: {");
    settingsLines.push("\t\t\t\ten: {");
    settingsLines.push("\t\t\t\t\ttitle: \"" + tables[1][32][1] + "\",");
    settingsLines.push("\t\t\t\t\tdescription: \"" + tables[1][33][1] + "\",");
    settingsLines.push("\t\t\t\t},");
    settingsLines.push("\t\t\t\tes: {");
    settingsLines.push("\t\t\t\t\ttitle: \"" + tables[1][32][2] + "\",");
    settingsLines.push("\t\t\t\t\tdescription: \"" + tables[1][33][2] + "\",");
    settingsLines.push("\t\t\t\t},");
    settingsLines.push("\t\t\t},");
    settingsLines.push("\t\t},");

    settingsLines.push("\t\t{");
    settingsLines.push("\t\t\tkey: 'accessToTransit',");
    settingsLines.push("\t\t\ttext: {");
    settingsLines.push("\t\t\t\ten: {");
    settingsLines.push("\t\t\t\t\ttitle: \"" + tables[1][34][1] + "\",");
    settingsLines.push("\t\t\t\t\tdescription: \"" + tables[1][35][1] + "\",");
    settingsLines.push("\t\t\t\t},");
    settingsLines.push("\t\t\t\tes: {");
    settingsLines.push("\t\t\t\t\ttitle: \"" + tables[1][34][2] + "\",");
    settingsLines.push("\t\t\t\t\tdescription: \"" + tables[1][35][2] + "\",");
    settingsLines.push("\t\t\t\t},");
    settingsLines.push("\t\t\t},");
    settingsLines.push("\t\t},");

    settingsLines.push("\t\t{");
    settingsLines.push("\t\t\tkey: 'passengerExperience',");
    settingsLines.push("\t\t\ttext: {");
    settingsLines.push("\t\t\t\ten: {");
    settingsLines.push("\t\t\t\t\ttitle: \"" + tables[1][36][1] + "\",");
    settingsLines.push("\t\t\t\t\tdescription: \"" + tables[1][37][1] + "\",");
    settingsLines.push("\t\t\t\t},");
    settingsLines.push("\t\t\t\tes: {");
    settingsLines.push("\t\t\t\t\ttitle: \"" + tables[1][36][2] + "\",");
    settingsLines.push("\t\t\t\t\tdescription: \"" + tables[1][37][2] + "\",");
    settingsLines.push("\t\t\t\t},");
    settingsLines.push("\t\t\t},");
    settingsLines.push("\t\t},");

    settingsLines.push("\t],");

    settingsLines.push("\tcostStyle: 'dollar',");
    settingsLines.push("\tdbCollectionName: \"" + tables[0][0][1] + "\",");
    settingsLines.push("\tmaxCost: " + tables[0][1][1] + ",");
    settingsLines.push("\tsaveResponses: " + tables[0][2][1] + ",");
    settingsLines.push("\tcommentBoxEnabled: " + tables[0][3][1] + ",");
    settingsLines.push("\tcommentBoxMaxCharacters: " + tables[0][4][1] + ",");
    settingsLines.push("\ttranslationEnabled: " + tables[0][5][1] + ",");

    settingsLines.push("\ttext: {");

    settingsLines.push("\t\ten: {");
    settingsLines.push("\t\t\tsiteTitle: \"" + tables[1][1][1] + "\",");
    settingsLines.push("\t\t\theaderTitle: \"" + tables[1][2][1] + "\",");
    settingsLines.push("\t\t\tlogoAlt: \"" + tables[1][3][1] + "\",");
    settingsLines.push("\t\t\tintroText: \"<h2>" + tables[1][4][1] + "</h2><p>" + tables[1][5][1] + "</p>\",");
    settingsLines.push("\t\t\tbenefitCategoriesSectionTitle: \"" + tables[1][6][1] + "\",");
    settingsLines.push("\t\t\thowItWorksTitle: \"" + tables[1][7][1] + "\",");
    settingsLines.push("\t\t\thowItWorksContent: \"" + tables[1][8][1] + "\",");
    settingsLines.push("\t\t\ttranslationContent: \"" + tables[1][9][1] + "\",");
    settingsLines.push("\t\t\tdashboardTitleBenefits: \"" + tables[1][10][1] + "\",");
    settingsLines.push("\t\t\tdashboardTitleCosts: \"" + tables[1][11][1] + "\",");
    settingsLines.push("\t\t\ttotalCostTitle: \"" + tables[1][12][1] + tables[0][1][1] + "\",");
    settingsLines.push("\t\t\tcostTitle: \"" + tables[1][13][1] + "\",");
    settingsLines.push("\t\t\tresetTitle: \"" + tables[1][14][1] + "\",");
    settingsLines.push("\t\t\tsubmitTitle: \"" + tables[1][15][1] + "\",");
    settingsLines.push("\t\t\tfooterCopyright: \"" + tables[1][16][1] + "\",");
    settingsLines.push("\t\t\tfooterAbout: \"" + tables[1][17][1] + "\",");
    settingsLines.push("\t\t\tmodalExceededTitle: \"" + tables[1][18][1] + "\",");
    settingsLines.push("\t\t\tmodalExceededContent: \"" + tables[1][19][1] + "\",");
    settingsLines.push("\t\t\tmodalNoneTitle: \"" + tables[1][20][1] + "\",");
    settingsLines.push("\t\t\tmodalNoneContent: \"" + tables[1][21][1] + "\",");
    settingsLines.push("\t\t\tmodalLeftoverTitle: \"" + tables[1][22][1] + "\",");
    settingsLines.push("\t\t\tmodalLeftoverContent: \"" + tables[1][23][1] + "\",");
    settingsLines.push("\t\t\tmodalSubmitTitle: \"" + tables[1][24][1] + "\",");
    settingsLines.push("\t\t\tmodalSubmitContent: \"" + tables[1][25][1] + "\",");
    settingsLines.push("\t\t\tmodalPostSubmitTitle: \"" + tables[1][26][1] + "\",");
    settingsLines.push("\t\t\tmodalPostSubmitContent: \"" + tables[1][27][1] + "\",");
    settingsLines.push("\t\t\tmodalCloseButton: \"" + tables[1][28][1] + "\",");
    settingsLines.push("\t\t\tmodalGoBackButton: \"" + tables[1][29][1] + "\",");
    settingsLines.push("\t\t\tmodalContinueButton: \"" + tables[1][30][1] + "\",");
    settingsLines.push("\t\t\tmodalSubmitButton: \"" + tables[1][31][1] + "\",");
    settingsLines.push("\t\t},");

    settingsLines.push("\t\tes: {");
    settingsLines.push("\t\t\tsiteTitle: \"" + tables[1][1][2] + "\",");
    settingsLines.push("\t\t\theaderTitle: \"" + tables[1][2][2] + "\",");
    settingsLines.push("\t\t\tlogoAlt: \"" + tables[1][3][2] + "\",");
    settingsLines.push("\t\t\tintroText: \"<h2>" + tables[1][4][2] + "</h2><p>" + tables[1][5][2] + "</p>\",");
    settingsLines.push("\t\t\tbenefitCategoriesSectionTitle: \"" + tables[1][6][2] + "\",");
    settingsLines.push("\t\t\thowItWorksTitle: \"" + tables[1][7][2] + "\",");
    settingsLines.push("\t\t\thowItWorksContent: \"" + tables[1][8][2] + "\",");
    settingsLines.push("\t\t\ttranslationContent: \"" + tables[1][9][2] + "\",");
    settingsLines.push("\t\t\tdashboardTitleBenefits: \"" + tables[1][10][2] + "\",");
    settingsLines.push("\t\t\tdashboardTitleCosts: \"" + tables[1][11][2] + "\",");
    settingsLines.push("\t\t\ttotalCostTitle: \"" + tables[1][12][2] + tables[0][1][1] + "\",");
    settingsLines.push("\t\t\tcostTitle: \"" + tables[1][13][2] + "\",");
    settingsLines.push("\t\t\tresetTitle: \"" + tables[1][14][2] + "\",");
    settingsLines.push("\t\t\tsubmitTitle: \"" + tables[1][15][2] + "\",");
    settingsLines.push("\t\t\tfooterCopyright: \"" + tables[1][16][2] + "\",");
    settingsLines.push("\t\t\tfooterAbout: \"" + tables[1][17][2] + "\",");
    settingsLines.push("\t\t\tmodalExceededTitle: \"" + tables[1][18][2] + "\",");
    settingsLines.push("\t\t\tmodalExceededContent: \"" + tables[1][19][2] + "\",");
    settingsLines.push("\t\t\tmodalNoneTitle: \"" + tables[1][20][2] + "\",");
    settingsLines.push("\t\t\tmodalNoneContent: \"" + tables[1][21][2] + "\",");
    settingsLines.push("\t\t\tmodalLeftoverTitle: \"" + tables[1][22][2] + "\",");
    settingsLines.push("\t\t\tmodalLeftoverContent: \"" + tables[1][23][2] + "\",");
    settingsLines.push("\t\t\tmodalSubmitTitle: \"" + tables[1][24][2] + "\",");
    settingsLines.push("\t\t\tmodalSubmitContent: \"" + tables[1][25][2] + "\",");
    settingsLines.push("\t\t\tmodalPostSubmitTitle: \"" + tables[1][26][2] + "\",");
    settingsLines.push("\t\t\tmodalPostSubmitContent: \"" + tables[1][27][2] + "\",");
    settingsLines.push("\t\t\tmodalCloseButton: \"" + tables[1][28][2] + "\",");
    settingsLines.push("\t\t\tmodalGoBackButton: \"" + tables[1][29][2] + "\",");
    settingsLines.push("\t\t\tmodalContinueButton: \"" + tables[1][30][2] + "\",");
    settingsLines.push("\t\t\tmodalSubmitButton: \"" + tables[1][31][2] + "\",");
    settingsLines.push("\t\t},");

    settingsLines.push("\t},");
    settingsLines.push("\t}");
    settingsLines.push("\n");
    settingsLines.push("export default settings");

    const settingsText = settingsLines.join('\n');

    fs.writeFile('customSettings.js', settingsText, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

  // Make the changed customStrategies.js file

  let firstPart = "// Everything in here is publicly accessible\n\nconst strategies = [\n"
  let lastPart = "\n]\n\nexport default strategies"

  var choicesLines = [];
  for (let i = 3; i < tables.length; i+=2)
  {
    choicesLines.push("{");
    choicesLines.push("key: \"" + tables[i+1][0][1] + "\",");
    choicesLines.push("text: {");
    choicesLines.push("en: {");
    choicesLines.push("title: \"" + tables[i][1][1] + "\",");
    choicesLines.push("description: \"" + tables[i][2][1] + "\",");
    choicesLines.push("category: \"" + tables[i][3][1] + "\",");
    choicesLines.push("},");
    choicesLines.push("es: {");
    choicesLines.push("title: \"" + tables[i][1][2] + "\",");
    choicesLines.push("description: \"" + tables[i][2][2] + "\",");
    choicesLines.push("category: \"" + tables[i][3][2] + "\",");
    choicesLines.push("},");
    choicesLines.push("},");
    choicesLines.push("benefits: {");
    choicesLines.push("ridership: " + tables[i+1][1][1] + ",");
    choicesLines.push("accessToTransit: " + tables[i+1][2][1] + ",");
    choicesLines.push("passengerExperience: " + tables[i+1][3][1] + ",");
    choicesLines.push("},");
    choicesLines.push("cost: " + tables[i+1][4][1] + ",");
    choicesLines.push("},");
  }

  let choicesText = choicesLines.join('\n');

  fs.writeFile('customStrategies.js', firstPart + choicesText + lastPart, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  
  var themeLines = [];

  themeLines.push("import color from 'color'");
  themeLines.push("\n");
  themeLines.push("export const colors = {");
  themeLines.push("\tbackground: \"" + tables[2][0][1] + "\",");
  themeLines.push("\tlink: \"" + tables[2][1][1] + "\",");
  themeLines.push("\tlinkHover: color(\"" + tables[2][1][1] + "\").darken(0.1),");
  themeLines.push("\tbtnLight: \"" + tables[2][2][1] + "\",");
  themeLines.push("\tbtnLightText: \"" + tables[2][3][1] + "\",");
  themeLines.push("\tbtnLightHover: color(\"" + tables[2][2][1] + "\").darken(0.1),");
  themeLines.push("\tbtnDark: \"" + tables[2][6][1] + "\",");
  themeLines.push("\tbtnDarkText: \"" + tables[2][7][1] + "\",");
  themeLines.push("\tbtnDarkHover: color(\"" + tables[2][6][1] + "\").darken(0.1),");
  themeLines.push("\tbtnDarkDisabled: color(\"" + tables[2][6][1] + "\").darken(0.5),");
  themeLines.push("\theaderStripe: \"" + tables[2][8][1] + "\",");
  themeLines.push("\tfooterBackground: \"" + tables[2][9][1] + "\",");
  themeLines.push("\tfooterText: \"" + tables[2][10][1] + "\",");
  themeLines.push("\tfooterTextHover: color(\"" + tables[2][10][1] + "\").darken(0.1),");
  themeLines.push("\tcardDark: `${\"" + tables[2][11][1] + "\"}!important`,");
  themeLines.push("\tdashboard: \"" + tables[2][12][1] + "\",");
  themeLines.push("\tdashboardText: \"" + tables[2][13][1] + "\",");
  themeLines.push("\tdashboardMeterBackground: \"" + tables[2][14][1] + "\",");
  themeLines.push("\tdashboardMeter: \"" + tables[2][15][1] + "\",");
  themeLines.push("\tdashboardMeterCost: \"" + tables[2][16][1] + "\",");
  themeLines.push("\tdashboardMeterOverCost: \"" + tables[2][17][1] + "\",");
  themeLines.push("\tdashboardMeterTextDark: \"" + tables[2][18][1] + "\",");
  themeLines.push("\tdashboardMeterTextLight: \"" + tables[2][19][1] + "\",");
  themeLines.push("\tstrategy: \"" + tables[2][20][1] + "\",");
  themeLines.push("\tstrategySelected: \"" + tables[2][22][1] + "\",");
  themeLines.push("\tstrategySelectedText: \"" + tables[2][23][1] + "\",");
  themeLines.push("\tstrategyBar: \"" + tables[2][24][1] + "\",");
  themeLines.push("\tstrategyCostSigns: \"" + tables[2][25][1] + "\",");
  themeLines.push("\n");
  themeLines.push("\t//New attributes below (btnLight still controls Translate button, strategyText is color of text when a strategy is selected)");
  themeLines.push("\tresetBtn: \"" + tables[2][4][1] + "\",");
  themeLines.push("\tresetBtnText: \"" + tables[2][5][1] + "\",");
  themeLines.push("\tstrategyText: \"" + tables[2][21][1] + "\",");
  themeLines.push("}");
  themeLines.push("\n");
  themeLines.push("export const breakpoints = {");
  themeLines.push("\tmedium: '768px',");
  themeLines.push("\tlarge: '992px',");
  themeLines.push("}");


    const modifiedThemeFile = themeLines.join('\n');

    fs.writeFile('customTheme.js', modifiedThemeFile, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

}
getCustomizationsAndChangeFiles();

