import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  current_function = '';
  result = null;

  constructor() {
  }

  ngOnInit() {

    document.addEventListener('dragstart', (event: any) => {
      // The dataTransfer.setData() method sets the data type and the value of the dragged data
      event.dataTransfer.setData('Text', event.target.id);

      // Output some text when starting to drag the p element
      document.getElementById('demo').innerHTML = 'Started to drag the p element.';

      // Change the opacity of the draggable element
      event.target.style.opacity = '0.4';
    });

    // While dragging the p element, change the color of the output text
    document.addEventListener('drag', (event: any) => {
      document.getElementById('demo').style.color = 'red';
    });

    // Output some text when finished dragging the p element and reset the opacity
    document.addEventListener('dragend', (event: any) => {
      document.getElementById('demo').innerHTML = 'Finished dragging the p element.';
      event.target.style.opacity = '1';
    });

    /* Events fired on the drop target */

    // When the draggable p element enters the droptarget, change the DIVS's border style
    document.addEventListener('dragenter', (event: any) => {
      if (event.target.className == 'drop-end-target') {
        event.target.style.border = '3px dotted red';
      }

      if (event.target.className == 'drop-start-target') {
        event.target.style.border = '3px dotted red';
      }
    });

// By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
    document.addEventListener('dragover', (event: any) => {
      event.preventDefault();
    });

// When the draggable p element leaves the droptarget, reset the DIVS's border style
    document.addEventListener('dragleave', (event: any) => {
      if (event.target.className == 'drop-end-target') {
        event.target.style.border = '';
      }

      if (event.target.className == 'drop-start-target') {
        event.target.style.border = '';
      }
    });

    /* On drop - Prevent the browser default handling of the data (default is open as link on drop)
       Reset the color of the output text and DIV's border color
       Get the dragged data with the dataTransfer.getData() method
       The dragged data is the id of the dragged element ("drag1")
       Append the dragged element into the drop element
    */
    document.addEventListener('drop', (event: any) => {
      event.preventDefault();
      console.log('drop event', event);


      if (event.target.className == 'drop-end-target') {
        document.getElementById('demo').style.color = '';
        event.target.style.border = '';
        let targeted_element_id = event.dataTransfer.getData('Text');
        event.target.appendChild(document.getElementById(targeted_element_id));

        const children = document.getElementById('drop-end').children;
        // console.log('children', children);
        for (let child in children) {
          // console.log('child', child);
          const child_name = children[child].id;
          console.log('child name', child_name);
          if (child_name && child_name.endsWith('-icon') && (child_name !== targeted_element_id)) {
            document.getElementById('drop-start').appendChild(document.getElementById(child_name));
          }
        }

        (document.getElementById('input-field-1') as HTMLInputElement).value = '';
        (document.getElementById('input-field-2') as HTMLInputElement).value = '';
        (document.getElementById('input-field-3') as HTMLInputElement).value = '';

        this.result = null;

        if (targeted_element_id === 'add-icon') {
          this.current_function = 'add';
          document.getElementById('input-field-1').style.display = 'inline';
          document.getElementById('input-field-2').style.display = 'inline';
          document.getElementById('input-field-3').style.display = 'none';
        }
        if (targeted_element_id === 'subtract-icon') {
          this.current_function = 'subtract';
          document.getElementById('input-field-1').style.display = 'inline';
          document.getElementById('input-field-2').style.display = 'inline';
          document.getElementById('input-field-3').style.display = 'none';
        }
        if (targeted_element_id === 'multiply-icon') {
          this.current_function = 'multiply';
          document.getElementById('input-field-1').style.display = 'inline';
          document.getElementById('input-field-2').style.display = 'inline';
          document.getElementById('input-field-3').style.display = 'inline';
        }
        if (targeted_element_id === 'divide-icon') {
          this.current_function = 'divide';
          document.getElementById('input-field-1').style.display = 'inline';
          document.getElementById('input-field-2').style.display = 'inline';
          document.getElementById('input-field-3').style.display = 'none';
        }

        if (targeted_element_id === 'square-root-icon') {
          this.current_function = 'square-root';
          document.getElementById('input-field-1').style.display = 'inline';
          document.getElementById('input-field-2').style.display = 'none';
          document.getElementById('input-field-3').style.display = 'none';
        }

        document.getElementById('submit-button').style.display = 'inline';

      }

      if (event.target.className == 'drop-start-target') {
        document.getElementById('demo').style.color = '';
        event.target.style.border = '';
        let targeted_element_id = event.dataTransfer.getData('Text');
        event.target.appendChild(document.getElementById(targeted_element_id));
      }
    });
  }

  showResult() {
    const input_1 = (document.getElementById('input-field-1') as HTMLInputElement).value;
    const input_2 = (document.getElementById('input-field-2') as HTMLInputElement).value;
    const input_3 = (document.getElementById('input-field-3') as HTMLInputElement).value;

    switch (this.current_function) {
      case 'add':
        this.result = Number(input_1) + Number(input_2);
        break;
      case 'subtract':
        this.result = Number(input_1) - Number(input_2);
        break;
      case 'multiply':
        this.result = Number(input_1) * Number(input_2) * Number(input_3);
        break;
      case 'divide':
        this.result = Number(input_1) / Number(input_2);
        break;
      case 'square-root':
        this.result = Math.sqrt(Number(input_1));
        break;
      default:
        break;
    }
  }


}
