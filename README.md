# SQLizer - SQL Editor

SQLizer is a powerful SQL editor tailored for data analysts and professionals who work with databases. Whether you're extracting insights, performing complex queries, or visualizing your data, SQLizer provides a comprehensive set of features to streamline your workflow.

## Overview

<img src="https://i.imgur.com/pZ58taj.png"/>

### Features

- **SQL Query Editor**: Users can write and edit SQL queries in a user-friendly code editor.
- **Query Execution**: Execute SQL queries against a connected database and view results.
- **Syntax Highlighting**: The editor provides syntax highlighting for SQL code.
- **Performance**: The editor aims to load quickly to provide a smooth user experience.

### Technologies Used

- React: The front-end is built using React for building a dynamic and responsive user interface.
- Libraries: Highcharts, CodeMirror

## Performance

### Page Load Time

<img src="https://i.imgur.com/4LnV4qI.png"/>

Page load time is a crucial metric for web applications. A fast-loading application improves user satisfaction, retention, and overall usability. Here, we outline how we measured the page load time for our SQL editor.

### Measurement Tools

We used several tools and techniques to measure the page load time:

1. **Lighthouse**: The JavaScript `performance` API provides precise timing data for various aspects of page loading, such as navigation, resource fetching, and rendering.
2. **web.dev**: Used Page Analysis to analyse the page load time, along with how well it performs as per web standards.
3. **React Profiler**: We used the React Profiler tool to identify component rendering times and potential bottlenecks within the React application.

### Optimisations
1. I have made the application into a <strong>PWA(Progressive Web App)</strong> so that it can be optimized as Google is promoting the use of such Installable apps. This also allows the web app to be used offline as it <strong>can be installed</strong>.

2. The website is made responsive to a great extent even though such an application is not very likely to be used on mobile devices. <strong>Absolute sizing is not used</strong> as much as possible and in turn, sizing units like <strong>em, rem, vh, and vw</strong> are used. <strong>Media queries</strong> have been used at most places.

3. The website is hosted on Netlify, which is considered to be one of the fastest free hosting mechanisms for JavaScript based Web apps due to it's CDN and caching benefits. It also provides a free SSL during hosting that is generally better for page security, and ranking.

4. React Code Splitting has been used for loading parts of the page not immediately required in the background.

5. Minimal dependencies have been used for the creation of the page.

6. Restructured code to reuse components & used minimal imports where necessary.


## Contributing

Contributions to this project are welcome. Please read our [Contribution Guidelines](CONTRIBUTING.md) for more information on how to get started.

## License

This project is licensed under the [MIT License](LICENSE).
