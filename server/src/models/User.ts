import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// 디비 테이블에 매핑될 거에요
@Entity()
export class User {

    // @PrimaryGeneratedColumn()
    // 이게 기본키 컬럼(AUTO_INCREMENT, UUID 같은거만)이라고 정의하는 거에요
    @PrimaryGeneratedColumn()
    userId: number;

    // @Column()
    // 컬럼이에요. 안에 타입이나 길이 등을 정의할수도 있네용
    @Column({ type: 'varchar', length: 20, unique: true })
    id: string;

    @Column({ type: 'varchar', length: 256 })
    password: string;

    @Column({ type: 'varchar', length: 20 })
    name: string;

}