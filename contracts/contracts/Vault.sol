// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Vault is ReentrancyGuard {
    IERC20 public immutable usdc;

    mapping(address => uint256) public deposits;
    mapping(address => uint256) public depositCount;

    event Deposit(address indexed user, uint256 amount, uint256 totalDeposits);
    event Withdrawal(
        address indexed user,
        uint256 amount,
        uint256 totalDeposits
    );

    constructor(address _usdc) {
        usdc = IERC20(_usdc);
    }

    function deposit(uint256 amount) external nonReentrant {
        require(amount > 0, "Amount must be > 0");

        usdc.transferFrom(msg.sender, address(this), amount);
        deposits[msg.sender] += amount;
        depositCount[msg.sender]++;

        emit Deposit(msg.sender, amount, deposits[msg.sender]);
    }

    function getDeposit(address user) external view returns (uint256) {
        return deposits[user];
    }

    function getTotalDeposits() external view returns (uint256) {
        return usdc.balanceOf(address(this));
    }

    function withdraw(uint256 amount) external nonReentrant {
        require(amount <= deposits[msg.sender], "Insufficient balance");

        deposits[msg.sender] -= amount;
        usdc.transfer(msg.sender, amount);

        emit Withdrawal(msg.sender, amount, deposits[msg.sender]);
    }
}
