import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('alert()', () => {
    it('should alert the user with SUCCESS if confirm returns true', () => {
      spyOn(component, 'confirm').and.callThrough();
      spyOn(window, 'alert').and.callThrough();
      spyOn(window, 'confirm').and.returnValue(true);

      component.confirm();
      expect(window.alert).toHaveBeenCalledWith('success!');
    });

    it('should alert the user with FAILURE if confirm returns false', () => {
      spyOn(component, 'confirm').and.callThrough();
      spyOn(window, 'alert').and.callThrough();
      spyOn(window, 'confirm').and.returnValue(false);

      component.confirm();
      expect(window.alert).toHaveBeenCalledWith('failed!');
    });
  });
});
