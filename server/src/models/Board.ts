import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// 디비 테이블에 매핑될 거에요
@Entity()
export class Board {
    
    // @PrimaryGeneratedColumn()
    // 이게 기본키 컬럼(AUTO_INCREMENT, UUID 같은거만)이라고 정의하는 거에요
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // 컬럼이에요. 안에 타입이나 길이 등을 정의할수도 있네용
    @Column({ type: 'varchar', length: 100 })
    title: string;

    @Column({ type: 'varchar', length: 1000 })
    content: string;

    @Column({ type: 'varchar', length: 20 })
    writer: string;
}