agar new file hai toh 
```
npm init -y
```

Step 1: Run the following commands
```
npm install -D tailwindcss
npx tailwindcss init
```
Step 2: Update tailwind.conf.js file to include this line:
```
content: ["*.html"],
```
Step 3: create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include the src/output.css file to your html

Step 5: Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

ya fir pakage.json me jaa kar "Script" me
```
"build":"npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
```
add kar do aur command chalao 
```
npm run build
```
