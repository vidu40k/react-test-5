/* eslint-disable */
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { getControllerContent, getStyleContent, getScreenContent, getIndexContent, getTypesContent } = require("./templates");
const { toCamelCase, toPascalCase } = require("./helpers");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите название компонента: ", name => {
    rl.question("Выберите тип:\n1) Экран\n2) Компонент\nВведите номер: ", type => {
        const typeChoice = parseInt(type, 10);
        if (typeChoice !== 1 && typeChoice !== 2) {
            console.log("Неверный выбор. Завершение программы.");
            rl.close();
            return;
        }

        const namePascal = toPascalCase(name);
        const nameCamel = toCamelCase(namePascal);
        const controllerName = `use${namePascal}Controller`;

        const projectRoot = path.join(__dirname, "..");
        const baseDir = path.join(projectRoot, "src", typeChoice === 1 ? "screens" : "components");

        const folder = path.join(baseDir, nameCamel);
        const indexFile = path.join(folder, "index.ts");
        const styleFile = path.join(folder, "styles.ts");
        const typesFile = path.join(folder, "types.ts");
        const controllerFile = path.join(folder, "controller.ts");
        const mainFile = path.join(folder, `${nameCamel}.tsx`);

        if (!fs.existsSync(baseDir)) {
            fs.mkdirSync(baseDir, { recursive: true });
            console.log(`Создана папка: ${baseDir}\n`);
        }

        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder);
            console.log(`Создана папка для ${typeChoice === 1 ? "экрана" : "компонента"}: ${folder}\n`);
        }

        fs.writeFileSync(indexFile, getIndexContent(namePascal, nameCamel));
        console.log(`Файл index.ts успешно создан в папке ${folder} с экспортом: ${namePascal}\n`);

        fs.writeFileSync(styleFile, getStyleContent());
        console.log(`Файл style.ts успешно создан в папке ${folder}\n`);

        fs.writeFileSync(typesFile, getTypesContent(namePascal));
        console.log(`Файл types.ts успешно создан в папке ${folder}\n`);

        fs.writeFileSync(controllerFile, getControllerContent(controllerName));
        console.log(`Файл controller.ts успешно создан в папке ${folder} с функцией: ${controllerName}\n`);

        fs.writeFileSync(mainFile, getScreenContent(namePascal));
        console.log(`Файл ${nameCamel}.tsx успешно создан в папке ${folder} с компонентом: ${namePascal}\n`);

        rl.close();
    });
});
