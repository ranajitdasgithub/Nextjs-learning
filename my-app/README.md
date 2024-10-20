npx create-next-app@latest

npm run dev

React server components

1. Server component

- In Next.js all components are server components by default.
- They have the ability to run tasks like reading files or fetching data from database
- However, they don't have the ability to user hooks or handle user interactions

2. Client component

- To create a Client component, its necessary to add "use client" at the top of the component file
- Client component can't perform tasks like reading files, but they have the ability to use hooks and manage interactions

Next.js routing:

Next.js has a file-system based routing
Routing convention:

- All routes must be placed inside the app folder
- Every file that corresponds to a route must be named page.js or page.tsx
- Every folder corresponds to a path segment in the browser URL

✨ **Dynamic route:** ✨

![Alt text](Readme-asset/dyna.png)

✨ **Nested Dynamic route:** ✨
![Alt text](Readme-asset/dynamic.png)

✨ **Catch-all segments:** ✨
![Alt text](Readme-asset/Catch-all.png)

Not found page:

- File name should be not-found.js in the app folder
- follow the product page with not-found.js file

File Colocation:

Private folder:

- create private folder using undersore previous its folder name
- For seperating UI logic from routing logic
- For consistently organizing internal files across a project
- For sorting and grouping files in code editors
- And finally, for avoiding potential naming conflicts with future Next.js file conventions
- A private folder indicates that it is a private implementation detail and should not be considered by the routing system
- The folder and all its subfolders are excluded from routing
- Prefix the folder name with an underscore
  Note: add '\_'= %5F to see the page in the url

Route Groups:

- Allows us to logically group our routes and project files withot affecting the URL path structure

- Authentication routes
  Register
  Login
  Forget password

For auth route add the auth folder in parentheses(auth)
And url will not include /auth it will be /login, /register, /forget-password

Layout:

- A page is UI that is unique to a route
- A layout is UI that is shared between multiple pages in the app
- like header, content, footer
- layout.js file is automatically created
- Add header and footer page in the layout file, and the {children} will be the page.js file content
- Header and footer will be there for all pages

![Alt text](Readme-asset/layout.png)

Nested Layouts:

![Alt text](Readme-asset/nested-layout.png)

Route Group layout:

- To organize your project in a manner that doesn't affect the URL
- To selectively apply a layout to certain segments while leaving otheres unchanged
- create Folder (with-auth-layout)
- move the login and register file
- create a layout.js file in the with-auth-layout folder
- url would be http://localhost:3000/login or register

Routing Metadata: (about.js page)

- Ensuring proper search engine optimization(SEO) is crucial for increasing visibility and attracting users
- Next.js introduced the Metadata API which allows you to define metadata for each page
- Metadata ensures accurate and relevant information is displayed when your pages are shared or indexed

Configuring Metadata:

- Export a static metadata object
- Export a dynamic generateMetadata function

Metadata Rules: (This create browser tab title)(check product>review>page.js)

- Both layout.js and page.js files can export metadata. If defined in a layout, it applies to all pages in that layout, but if defined in a page, it applies only to that page
- Metadata is read in order, from the root level down to the final page level
- When there's metadata in multiple places for the same route, they get combined, but page metadata will replace layout metadata if they have the same properties

Title Metadata: (check app>layout.js page)

- The filed's primary purpose is to define the document title
- It can be either a sting or an object
- absolute, default, template will be in the title object
  //Default title for whole page if there is no such title
  //Template title will add %s title from children and like for blog page 'Blog | Template title'
  //Abosolute will be same for all page if there is no such title in the children page

Link Component Navigation:

- File based routing
- We manually entered the URLs in the browser's address bar to navigate to the different routes
  Users rely on UI element like the links to navigate

  - Clicking on them or
  - Through programmatic navigation after completing an action

- similar like <a> tag but here is <Link>
{/_ 'replace' will be back to direct homepage _/}
  <!-- <Link href="/products/3" replace>Product 3</Link>
<Link href={`/products/${specificProductId}`}>Product {specificProductId}</Link> -->

Active Links:
- 