// palindrom_project.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <fstream>
#include <string>
#include <cctype>

bool isWordPalindrome(const std::string& word) {
    int left = 0;
    int right = word.length() - 1;

    while (left < right) {
        char leftChar = std::tolower(word[left]);
        char rightChar = std::tolower(word[right]);
        if (leftChar != rightChar) {
            return false;
        }

        ++left;
        --right;
    }
    return true;
}

int main()
{
    std::ifstream inputFile("C:\\Users\\katlego\\source\\repos\\palindrom_project\\word.txt");

    //testing if the file opens 
    if (!inputFile) {
        std::cerr << "Cannot open file, due to path or mistyping";
        return 1;
    }

    //manipulating any word in the file for displaying
    std::string word;
    while (inputFile >> word) {
        if (isWordPalindrome(word)) {
            std::cout << word << "\n";
        }
    }

    inputFile.close();

}

