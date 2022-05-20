import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, SaveOptions } from "typeorm";

@Entity()
export class mrtstation extends BaseEntity {

    @PrimaryColumn({ type: "varchar", length: 50, unique: true })
    station_name!: string;

    @Column({ type: "varchar", length: 15 })
    station_code!: string;

    @Column({ type: "varchar", length: 15 })
    construction_id!: string;

    @Column({ type: "varchar", length: 20 })
    station_name_tw!: string;

    @Column({ type: "varchar", length: 15 })
    line_code!: string;

    @Column({ type: "varchar", length: 45 })
    line_name!: string;

    @Column({ type: "varchar", length: 40 })
    address!: string;

    @Column({ type: "varchar", length: 50 })
    coordinates!: string
}