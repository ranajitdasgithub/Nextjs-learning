npx create-next-app@latest

npm run dev


React server components

1. Server component
- In Next.js all components are server components by default.
- They have the ability to run tasks like reading files or fetching data from database
- However, they don't have the ability to user hooks or handle user interactions

2. Client component 
- To create a Client component, its necessary to add "use client"  at the top of the component file
- Client component can't perform tasks like reading files, but they have the ability to use hooks and manage interactions

Next.js routing:

Next.js has a file-system based routing 
Routing convention:
- All routes must be placed inside the app folder
- Every file that corresponds to a route must be named page.js or page.tsx
- Every folder corresponds to a path segment in the browser URL

✨ **Dynamic route:** ✨ 

![Alt text](Readme-asset/dyna.png)

✨ __Nested Dynamic route:__ ✨ 
![Alt text](Readme-asset/dynamic.png)

✨ **Catch-all segments:** ✨ 
![Alt text](Readme-asset/Catch-all.png)

Not found page:
- File name should be not-found.js in the app folder 
- follow the product page with not-found.js file

File Colocation:

Private folder:
- A private folder indicates that it is a private implementation detail and should not be considered by the routing system
- The folder and all its subfolders are excluded from routing
- Prefix the folder name with an underscore


dfwdfaskfnsa
