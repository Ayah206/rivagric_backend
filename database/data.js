module.exports = {
    users : [
        {
            userId: "0011",
            email: "richie@gmail.com",
            lastName: "rich",
            firstName: "good",
            middleName: "tamar",
            role: "admin"
        },
        {
            userId: "0012",
            email: "elias@gmail.com",
            lastName: "elias",
            firstName: "ford",
            middleName: "manty",
            role: "admin"
        },
        {
            userId: "0013",
            email: "goldilock@gmail.com",
            lastName: "goldi",
            firstName: "lock",
            middleName: "golden",
            role: "user"
        },
    ],
    users2 : [
        {
            email: "ayahluke20@gmail.com",
            lastName: "Luke",
            firstName: "Ayaefu",
            middleName: "Aya",
            role: "admin"
        },
        
    ],

    businesses : [
        {
            regId: "0011",
            name: "food 4 all",
            owner: "6547c6290f9be1ef00369046",
            cacId: "9912345",
            address: "kilometer 15, etche",
            addedBy: "6547c6290f9be1ef00369045",
        },
        {
            regId: "0012",
            name: "eat-and-poo",
            owner: "6547c6290f9be1ef00369046",
            cacId: "0987656",
            address: "kilometer 9, oyigbo",
            addedBy: "6547c6290f9be1ef00369045",
        }
    ],

    categories: [
        {
            name: 'aquaculture',
            categoryId: "cat01",
            addedBy: "6547c6290f9be1ef00369045"
        },
        {
            name: 'cropfarm',
            categoryId: "cat02",
            addedBy: "6547c6290f9be1ef00369045"
        },
        {
            name: 'orchard',
            categoryId: "cat03",
            addedBy: "6547c6290f9be1ef00369045"
        },
        {
            name: 'poultry',
            categoryId: "cat04",
            addedBy: "6547c6290f9be1ef00369045"
        },
        {
            name: 'barn',
            categoryId: "cat05",
            addedBy: "6547c6290f9be1ef00369045"
        },
        {
            name: 'vineyard',
            categoryId: "cat06",
            addedBy: "6547c6290f9be1ef00369045"
        },
    ],
    products: [
        {
            name: 'cat fish',
            category: '6547cd448a1851e54c8e7ae4',
            addedBy: "6547c6290f9be1ef00369045"
        },
        {
            name: 'rice',
            category: '6547cd448a1851e54c8e7ae5',
            addedBy: "6547c6290f9be1ef00369045"
        },
        {
            name: 'chicken',
            category: '6547cd448a1851e54c8e7ae7',
            addedBy: "6547c6290f9be1ef00369045"
        },
        {
            name: 'goat',
            category: '6547cd448a1851e54c8e7ae8',
            addedBy: "6547c6290f9be1ef00369045"
        },
    ],
    operations: [
        {
            operationId: 'op0001',
            runBy: "6547cd448a1851e54c8e7ae3",
            category: "6547cd448a1851e54c8e7ae7",
            description: "A small poultry",
            locations: ["20 aggrey road"],
            contactNumbers: ['+2347019985471', '+2349087344578'], 
            addedBy: "6547c6290f9be1ef00369045",
            status: '1'
        },
        {
            operationId: 'op0002',
            runBy: "6547cd448a1851e54c8e7ae3",
            category: "6547cd448a1851e54c8e7ae5",
            description: "A local rice farm",
            locations: ["44 willy road"],
            contactNumbers: ['+2347019985471', '+2349087344578'], 
            addedBy: "6547c6290f9be1ef00369045",
            status: '0'
        },
        {
            operationId: 'op0003',
            runBy: "6547cd448a1851e54c8e7ae3",
            category: '6547cd448a1851e54c8e7ae4',
            description: "A livestock farm",
            locations: ["20 afam road"],
            contactNumbers: ['+2347019985471', '+2349087344578'], 
            addedBy: "6547c6290f9be1ef00369045",
            status: '1'
        }
    ],
    operationProducts: [
        {
            opProductId : 'opp001',
            product: "6548dcb8038f51a73ba5297c",
            operation: "6548ded3ba4edeadb19087c5",
            description: "short grain rice",
            size: "medium",
            netProductionCapacity: "50 bags/year",
            costs: ["20,000/bag"],
            availableQuantity: "10,000 bags",
            addedBy: "6547c6290f9be1ef00369045",    
        }
    ]
}