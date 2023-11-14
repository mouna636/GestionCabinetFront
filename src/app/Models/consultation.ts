import { Patient } from './patient';

export class Consultation {
  constructor(
    id: number,
    date_consultation: Date,
    Synthese: string,
    act: string,
    patient: Patient
  ) {}
}
