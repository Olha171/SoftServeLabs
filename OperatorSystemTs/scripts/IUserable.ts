interface IUserable{
    readonly id: number;
    readonly phone: string;
    readonly balance: number;
    addBalance(balance: number): void;
    removeBalance(balance: number ): void;
    tariff: ITarifable | null
    payStatus: boolean;
}