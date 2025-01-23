using System;

class Program {
    static void Main() {
        var estados = new (string, double)[] {
            ("SP", 67836.43),
            ("RJ", 36678.66),
            ("MG", 29229.88),
            ("ES", 27165.48),
            ("Outros", 19849.53)
        };

        double total = 0;
        foreach (var estado in estados) total += estado.Item2;

        foreach (var estado in estados) {
            double percentual = (estado.Item2 / total) * 100;
            Console.WriteLine($"{estado.Item1}: {percentual:F2}% do faturamento total.");
        }
    }
}
