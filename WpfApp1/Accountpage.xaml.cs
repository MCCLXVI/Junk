using System.Windows;
using System.Windows.Controls;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for AccountPage.xaml
    /// </summary>
    public partial class AccountPage : Page
    {
        public AccountPage()
        {
            InitializeComponent();
        }

        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            // Handle login logic here
            string username = LoginUsername.Text;
            string password = LoginPassword.Password;

            // Example: Display a message box
            MessageBox.Show($"Login with Username: {username} and Password: {password}");
        }

        private void CreateAccountButton_Click(object sender, RoutedEventArgs e)
        {
            // Handle create account logic here
            string username = CreateUsername.Text;
            string password = CreatePassword.Password;
            string confirmPassword = ConfirmPassword.Password;

            if (password == confirmPassword)
            {
                // Example: Display a message box
                MessageBox.Show($"Account created for Username: {username}");
            }
            else
            {
                MessageBox.Show("Passwords do not match");
            }
        }
    }
}