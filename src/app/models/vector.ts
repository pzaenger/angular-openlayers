import VectorSource from 'ol/source/Vector';

export interface Vector {
  readonly name: string;
  readonly source: VectorSource;
}
