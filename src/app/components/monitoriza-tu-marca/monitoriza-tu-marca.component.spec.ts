import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorizaTuMarcaComponent } from './monitoriza-tu-marca.component';

describe('MonitorizaTuMarcaComponent', () => {
  let component: MonitorizaTuMarcaComponent;
  let fixture: ComponentFixture<MonitorizaTuMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorizaTuMarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorizaTuMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
