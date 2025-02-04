using System;
using System.Windows;
using System.Windows.Controls;

namespace WpfApp5
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void BtnClickHomepage(object sender, RoutedEventArgs e)
        {
            Main.Content = new Homepage();  // Navigate to Homepage
        }

        private void BtnClickSocialpage(object sender, RoutedEventArgs e)
        {
            Main.Content = new Socialpage();  // Navigate to Socialpage
        }
    }
}
