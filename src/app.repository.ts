// import { EntityRepository, Repository } from "typeorm";

// @EntityRepository()
// export class AppRepository<T> extends Repository<T> {
//     async createEntity(entity: T): Promise<T> {
//         return this.save(entity);
//       }
    
//       async findOneEntity(id: number): Promise<T> {
//         return this.findOne(id);
//       }
    
//       async updateEntity(id: number, entity: T): Promise<T | undefined> {
//         await this.update(id, entity);
//         return this.findOne(id);
//       }
    
//       async deleteEntity(id: number): Promise<void> {
//         await this.delete(id);
//       }
// }