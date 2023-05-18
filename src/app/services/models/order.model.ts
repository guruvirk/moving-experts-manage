export class Order {
    id: string
    name: string
    code: string
    email: string
    phone: number
    date: Date
    createdOn: Date
    pickupAddress: string
    deliveryAddress: string
    size: string
    notes: string
    status: string
    lastUpdate: Date

    constructor(obj?: any) {
        if (!obj) {
            return;
        }
        this.id = obj.id
        this.name = obj.name
        this.code = obj.code
        this.date = obj.date
        this.createdOn = obj.createdOn
        this.status = obj.status
        this.lastUpdate = obj.lastUpdate
        this.email = obj.email
        this.phone = obj.phone
        this.notes = obj.notes
        this.size = obj.size
        this.pickupAddress = obj.pickupAddress
        this.deliveryAddress = obj.deliveryAddress
    }
}