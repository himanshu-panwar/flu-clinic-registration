import * as React from 'react';
import styles from './FluClinicRegistration.module.scss';
import { IFluClinicRegistrationProps } from './IFluClinicRegistrationProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IfluClinicRegistration } from './../Model/IfluClinicRegistration';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/components/Button';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';



export default class FluClinicRegistration extends React.Component<IFluClinicRegistrationProps, IfluClinicRegistration> {
  constructor(props) {
    super(props);
    this.state = {
      Location: "Calgary",
      User:"",
      selectedSlot: undefined,
      required: "This is required",
      onSubmission: false
    }
  }
  public render(): React.ReactElement<IFluClinicRegistrationProps> {
    const { Location, User, selectedSlot } = this.state;
    return (
      <div className={ styles.fluClinicRegistration }>
        <div className={ styles.container }>
        <div className={`ms-Grid-row ms-bgColor-neutralLight ms-fontColor-white ${styles.row}`}>
              <div className="ms-Grid-col ms-u-sm4 block">
                <label className="ms-Label">Location</label>
              </div>
              <div className="ms-Grid-col ms-u-sm8 block">
                <TextField value={this.state.Location} required={true} 
                  errorMessage={(this.state.Location.length === 0 && this.state.onSubmission === true) ? this.state.required : ""} />
              </div>

              <div className="ms-Grid-col ms-u-sm4 block">
                <label className="ms-Label">User</label>
              </div>
              <div className="ms-Grid-col ms-u-sm8 block">
                <TextField value={this.state.User} required={true} 
                  errorMessage={(this.state.User.length === 0 && this.state.onSubmission === true) ? this.state.required : ""} />
              </div>

              <div className="ms-Grid-col ms-u-sm4 block">
                <label className="ms-Label">Slot</label><br />
              </div>
              <div className="ms-Grid-col ms-u-sm8 block">
                <Dropdown
                  placeHolder="Select an Slot"
                  label=""
                  id="component"
                  selectedKey={selectedSlot ? selectedSlot.key : undefined}
                  ariaLabel="Basic dropdown example"
                  options={[
                    { key: 'Human Resource', text: 'Human Resource' },
                    { key: 'Finance', text: 'Finance' },
                    { key: 'Employee', text: 'Employee' }
                  ]}
                />
              </div>

              <div className="ms-Grid-col ms-u-sm6 block">
              </div>
              <div className="ms-Grid-col ms-u-sm2 block">
                <PrimaryButton text="Register" onClick={() => { this.validateForm(); }} />
              </div>
              <div className="ms-Grid-col ms-u-sm2 block">
                <DefaultButton text="Reset" onClick={() => { this.setState({}); }} />
              </div>

        </div>
        </div>
      </div>
    );
  }

    /**
   * A sample to show on how form can be validated
   */
  private validateForm(): void {
    let allowCreate: boolean = true;
    this.setState({ onSubmission: true });

    if (this.state.Location.length === 0) {
      allowCreate = false;
    }
    if (this.state.User.length === 0) {
      allowCreate = false;
    }

    if (allowCreate) {
      alert("Form is valid");
    }
    else {
      //do nothing
    }
  }

}
