module.exports = {
        moduleNameMapper: {
                '^@auth/(.*)$': '<rootDir>/src/modules/auth/$1',
                '^@token/(.*)$': '<rootDir>/src/modules/token/$1',
                '^@user/(.*)$': '<rootDir>/src/modules/user/$1',
                '^@product/(.*)$': '<rootDir>/src/modules/product/$1',
                '^@review/(.*)$': '<rootDir>/src/modules/review/$1',
                '^@category/(.*)$': '<rootDir>/src/modules/category/$1',
                '^@search/(.*)$': '<rootDir>/src/modules/search/$1',
                '^@email/(.*)$': '<rootDir>/src/modules/email/$1',
                '^@offering/(.*)$': '<rootDir>/src/modules/offering/$1',
                '^@renting/(.*)$': '<rootDir>/src/modules/renting/$1',
                '^@cart/(.*)$': '<rootDir>/src/modules/cart/$1',
                '^@item/(.*)$': '<rootDir>/src/modules/item/$1',
                '^@chat/(.*)$': '<rootDir>/src/modules/chat/$1',
                '^@order/(.*)$': '<rootDir>/src/modules/order/$1',
                '^@stripe/(.*)$': '<rootDir>/src/modules/stripe/$1',
                '^@address/(.*)$': '<rootDir>/src/modules/address/$1',
                '^@subscription/(.*)$': '<rootDir>/src/modules/subscription/$1',
                '^@wishlist/(.*)$': '<rootDir>/src/modules/wishlist/$1',
                '^@storages/(.*)$': '<rootDir>/src/modules/storages/$1',
                '^@shipping/(.*)$': '<rootDir>/src/modules/shipping/$1',
                '^@inventory/(.*)$': '<rootDir>/src/modules/inventory/$1',
                '^@shared/(.*)$': '<rootDir>/src/shared/$1',
                '^@config/(.*)$': '<rootDir>/src/config/$1',
                '^@common/(.*)$': '<rootDir>/src/common/$1',
                '^@utils/(.*)$': '<rootDir>/src/utils/$1',
        },
        testEnvironment: 'node',
        testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
        // setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
        collectCoverage: true,
        coverageDirectory: 'coverage',
        coverageReporters: ['text', 'lcov'],
        transform: {
                '^.+\\.tsx?$': 'ts-jest',
        },
};
