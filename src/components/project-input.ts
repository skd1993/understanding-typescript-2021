/// <reference path="base-component.ts" />
/// <reference path="../utils/validation.ts" />
/// <reference path="../decorators/autobind.ts" />
/// <reference path="../state/project-state.ts" />

namespace App {
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInput: HTMLInputElement;
    descInput: HTMLInputElement;
    peopleInput: HTMLInputElement;

    constructor() {
      super('project-input', 'app', true, 'user-input');
      this.titleInput = this.element.querySelector(
        '#title'
      ) as HTMLInputElement;
      this.descInput = this.element.querySelector(
        '#description'
      ) as HTMLInputElement;
      this.peopleInput = this.element.querySelector(
        '#people'
      ) as HTMLInputElement;
      this.configure();
    }

    configure() {
      this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent() {}

    private gatherUserInput(): [string, string, number] | void {
      const enteredTitle = this.titleInput.value;
      const enteredDesc = this.descInput.value;
      const enteredPeople = this.peopleInput.value;

      const titleValidatable: Validatable = {
        value: enteredTitle,
        required: true,
      };

      const descValidatable: Validatable = {
        value: enteredDesc,
        required: true,
        minLength: 5,
      };

      const peopleValidatable: Validatable = {
        value: enteredPeople,
        required: true,
        min: 1,
        max: 10,
      };

      if (
        !validate(titleValidatable) ||
        !validate(descValidatable) ||
        !validate(peopleValidatable)
      ) {
        alert('invalid input, try again');
        return;
      } else {
        return [enteredTitle, enteredDesc, +enteredPeople];
      }
    }

    private clearInputs() {
      this.titleInput.value = '';
      this.descInput.value = '';
      this.peopleInput.value = '';
    }

    @autobind
    private submitHandler(event: Event) {
      event.preventDefault();
      const userInput = this.gatherUserInput();
      if (Array.isArray(userInput)) {
        const [title, desc, people] = userInput;
        projectState.addProject(title, desc, people);
        console.log(title, desc, people);
      }
      this.clearInputs();
    }
  }
}
