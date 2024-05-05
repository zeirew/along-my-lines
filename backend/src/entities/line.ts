import {Entity, PrimaryKey, PrimaryKeyProp, Property} from '@mikro-orm/core';

@Entity()
export class Line {
  [PrimaryKeyProp]?: 'stationIds';

  @Property({nullable: true})
  isComplex?: boolean;

  @Property({nullable: true})
  numberOfStationsInComplex?: number;

  @Property({length: 255, nullable: true})
  stopName?: string;

  @Property({length: 255, nullable: true})
  displayName?: string;

  @Property({length: 255, nullable: true})
  constituentStationNames?: string;

  @PrimaryKey({length: 255})
  stationIds!: string;

  @Property({length: 255, nullable: true})
  gtfsStopIds?: string;

  @Property({length: 255, nullable: true})
  borough?: string;

  @Property({length: 255, nullable: true})
  daytimeRoutes?: string;

  @Property({length: 255, nullable: true})
  structureType?: string;

  @Property({columnType: 'double precision', nullable: true})
  latitude?: number;

  @Property({columnType: 'double precision', nullable: true})
  longitude?: number;

  @Property({nullable: true})
  adaStatus?: number;

  @Property({length: 255, nullable: true})
  adaNotes?: string;
}
