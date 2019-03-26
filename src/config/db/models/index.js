const basics = {
    id: {
        type: 'number',
        autoMigrations: {autoIncrement: true},
        columnName: 'id'
    },
}

module.exports = [
    {
        identity: 'gallery',
        datastore: 'default',
        shema: true,
        autoPK: false,
        primaryKey: 'id',
        attributes: {
            ...basics,
            url: {
                type: 'string'
            },
            name: {
                type: 'string'
            },
            description: {
                type: 'string'
            },
        }
    },
    {
        identity: 'review',
        datastore: 'default',
        shema: true,
        autoPK: false,
        primaryKey: 'id',
        attributes: {
            ...basics,
            name: {
                type: 'string'
            },
            comment: {
                type: 'string'
            },
            stars: {
                type: 'number'
            },
        }
    }
];
