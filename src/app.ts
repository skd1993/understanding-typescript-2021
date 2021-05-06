// special comment with 3 slashes for namespace usage, it is not vanilla JS
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

// both namespaces should have same name for using, so here we will create a new namespace named "App" and put all code in it. And same way we rename our existing namespace in other ts file to "App"

namespace App {
  // without namespace usage
  // const projInput = new ProjectInput();
  // const activeProjectList = new ProjectList('active');
  // const doneProjectList = new ProjectList('finished');

  //in namespace usage
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}
