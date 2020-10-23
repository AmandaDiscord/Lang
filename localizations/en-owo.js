const genewic = {
	error: "API did not weturn any dwata.",
	dm: {
		success: "I sent chu a DM. (✿◠‿◠)",
		fail: "chu must awwow me to DM chu for dat command to work. Either chu've bwocked me, or chu need to twurn on DMs in dis server. (server settings → pwivacy → awwow direct mwessages). ┐(‘～`；)┌",
		blocked: "I cowoldn't DM dat person. Maybe dey bwocked me, or maybe dey need to turn on DMs in a shared server. (◕︵◕)"
	},
	command: {
		dmOnly: "dis command can owonly be used in DMs. (⊙︿⊙✿)",
		guildOnly: "dis command does not work in DMs. (⊙︿⊙✿)",
		permPre: "I dowon't have permwission to",
		permPost: "I work best when I have aww of da permissions I've asked for when inviting me. Pwease mwodify my permissions. (●\´ω\｀●)",
		input: {
			invalid: "dat is not a vawid",
			insufficient: "chu do not have dat many"
		}
	},
	image: {
		dm: "Why would chu want to %action someone in DMs?",
		noUser: "chu have to tell me who chu wanna %action"
	},
	emoji: {
		discoin: "<a:Discoin:422523472128901140>"
	}
}

module.exports = {
	admin: {
		evaluate: {
			help: {
				usage: "<cowode>",
				description: "Executes awbitwawy JavaScwipt in the pwocess"
			},
			prompts: {
				noInput: "chu didn't pwovide any input to evaluate, baka. (>.<)"
			},
			returns: {}
		},
		execute: {
			help: {
				usage: "<cowode>",
				description: "Executes a shell opewation"
			},
			prompts: {
				noInput: "chu didn't pwovide anything to execute, baka. (>.<)"
			},
			returns: {}
		},
		award: {
			help: {
				usage: "<amount> <user>",
				description: "Awards a specific user"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				invalidAmount: `%username, ${genewic.command.input.invalid} amount towo award.`,
				invalidUser: `%username, ${genewic.command.input.invalid} user, baka.`,
				dmFailed: genewic.dm.blocked
			},
			returns: {
				channel: "%mention1 has awarded %number amandollars towo %mention2",
				dm: `%mention has awarded chu %number ${genewic.emoji.discoin}`
			}
		},
		forcestatusupdate: {
			help: {
				usage: "None",
				description: "Forces the current shard to send statistic data to da database"
			},
			prompts: {},
			returns: {}
		},
		restartnotify: {
			help: {
				usage: "None",
				description: "Notifies chu when Amanda is onwine again"
			},
			prompts: {},
			returns: {
				confirmation: "Awight. chuu'll be notified of the next time I westart"
			}
		}
	},

	gambling: {
		slot: {
			help: {
				usage: "[amount: numbwer|all|half]",
				description: "Wuns a wandom swot machine for a chance at amandollars"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				permissionDenied: `${genewic.command.permPre} atwach files. ${genewic.command.permPost}`,
				invalidBet: `%username, ${genewic.command.input.invalid} bet, baka`,
				betSmall: `%username, chu must bet at weast 2 ${genewic.emoji.discoin}`,
				moneyInsufficient: `%username, ${genewic.command.input.insufficient} amandollars.`
			},
			returns: {
				lost: `Sowwy. Chu didn't get a mwatch. chu wost %number ${genewic.emoji.discoin} (\*\´д\｀\*)`,
				triple: `A twiple. chu won %number ${genewic.emoji.discoin}`,
				heart1: `A single :heart: chu won %number ${genewic.emoji.discoin}`,
				heart2: `Wow! Double :heart: chu won %number ${genewic.emoji.discoin}`,
				heart3: `WOAH! Twiple :heart: chu won %number ${genewic.emoji.discoin}`
			}
		},
		flip: {
			help: {
				usage: "None",
				description: "Fwips a coin"
			},
			prompts: {},
			returns: {
				flip: "Chu fwipped %flip"
			}
		},
		betflip: {
			help: {
				usage: "<amount: numbwer|all|half> [h|t]",
				description: "Place a bet on a random flip for a chance of amandollars"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				invalidBetandSide: "%username, chu need to provide a bet and a side to bet on, baka",
				invalidBet: `%username, ${genewic.command.input.invalid} bet.`,
				betSmall: `%username, chu must bet at least 1 ${genewic.emoji.discoin}`,
				moneyInsufficient: `%username, ${genewic.command.input.insufficient} amandollars.`,
				invalidSide: "%username, that is not a valid side to bet on."
			},
			returns: {
				autoChoose: "chu didn't choose a side (>.<), so I picked one for chu:",
				guess: "chu guessed %string1 I fwipped %string2",
				win: `chu guessed it! Chu got %number ${genewic.emoji.discoin} %explanation (\´･ω･\`)`,
				lost: `Sowwy, chu didn't gess cowwectly. chu wost %number ${genewic.emoji.discoin} (\*\´д\｀\*)`
			}
		},
		coins: {
			help: {
				usage: "[user]",
				description: "Weturns the amount of amandollars chu or another user has"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				invalidUser: `%username, ${genewic.command.input.invalid} user, baka`,
			},
			returns: {
				coins: `amandollars for %display`
			}
		},
		daily: {
			help: {
				usage: "None",
				description: "A daiwy command that gives a wandom amount of amandollars",
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				cooldown: "%username, chur daiwy amandollars will wefwesh in %number. (⊙﹏⊙✿)",
			},
			returns: {
				claimed: `%username cwaimed their daily and got %number ${genewic.emoji.discoin} ヽ(\´▽\｀)ノ`
			}
		},
		leaderboard: {
			help: {
				usage: "[local] [page: number]",
				description: "Gets the leaderboard for people with the most amandollars"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				pageLimit: "%username, chu may owonly browose up to page %maxPages.",
				pageCurrent: "Page %current of %total"
			},
			returns: {
				emptyPage: "There are onwy %lastPage pages to browose thwoogh."
			}
		},
		give: {
			help: {
				usage: "<amount: numbwer|all|half> <user>",
				description: "Gives amandollars towo a user from ur account"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				invalidAmountandUser: "%username, chu have to pwovide an amowont towo give and den a user.",
				invalidUser: `%username, ${genewic.command.input.invalid} user, baka.`,
				cannotGiveSelf: "chu can't give amandollars to urself, baka. ˇ︿ˇ",
				invalidGift: `%username, ${genewic.command.input.invalid} gift ヾ(ﾟдﾟ)ﾉ`,
				giftSmall: `%username, chu must give at weast 1 ${genewic.emoji.discoin}`,
				moneyInsufficient: `%username, ${genewic.command.input.insufficient} amandollars.`,
				dmFailed: genewic.dm.blocked
			},
			returns: {
				channel: "%mention1 has given %number amandollars to %mention2 (\´･ω･\`)",
				dm: `%mention has given chu %number ${genewic.emoji.discoin}`
			}
		},
		wheel: {
			help: {
				usage: "[amount: numbwer|all|half]",
				description: "A Wheel of Fortune for a chance at making more amandollars uwu"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				permissionDenied: `${genewic.command.permPre} attach fwiles. ${genewic.command.permPost}`,
				invalidAmountWheel: "%username, chu need to pwovide an amount to spin da wheel with (\´ヘ｀()",
				betSmall: `%username, chu must bet at weast 1 ${genewic.emoji.discoin}`,
				moneyInsufficient: `%username, ${genewic.command.input.insufficient} amandollars.`,
				invalidAmount: `%username, ${genewic.command.input.invalid} amount.`,
			},
			returns: {
				winnings: `%tag bet %number1 amandollars and got %number2 back ${genewic.emoji.discoin} owo`
			}
		}
	},

	games: {
		trivia: {
			help: {
				usage: "[categowy]",
				description: "Pway a game of twivia with other members and win amandollars"
			},
			prompts: {
				categorySelect: "To sewect a category, use `&trivia <category name>`.",
				dm: "%username, I've sent chu a DM with da list of categowies (\`･ω･´)",
				noCategory: "%username, I found no categowies with that name ┐(‘～`；)┌ Use `&trivia categories` for da compwete wist of categowies.",
				multipleCategories: "%username, dere are multipwe categowies with dat name (◑○◑): %string ",
				gameInProgress: "%username, dere's a game awready in pwogress for dis channel, baka",
				APIError: "dere was an ewwow from da api (´･_･\`)",
				parsingError: "dere was an ewwow parsing da data weturned by da api (´･_･\`)",
				permissionDenied: `${genewic.command.permPre} add reactions`,
				provideAnswer: "To answer, type a letter in chat. Chu have 20 seconds.",
				reactionRound: "Click the reaction for another round.",
				permissionRound: "Chu can type \`&trivia\` or \`&t\` for another round.",
				winners: "Winners",
				noWinners: "No Winners",
				nextRound: "Next Round",
				categories: "Categories",
				dmError: genewic.dm.fail
			},
			returns: {}
		},
		minesweeper: {
			help: {
				usage: "[easy|medium|hard] [--raw] [--size:numbwer]",
				description: "Starts a game of minesweeper using da Discord spowoiler system"
			},
			prompts: {},
			returns: {
				info: `%difficulty -- %number1 boom booms, %number2 x %number3 bowoard`,
				error: "da minimum size is 4 and da max is 14. Da bowoard has been adjusted (=゜ω゜)",
				rawTooLarge: "Da raw content exceeded the 2000 character limit (◎_◎;) Pwease use a smaller bowoard size"
			}
		}
	},

	images: {
		cat: {
			help: {
				usage: "None",
				description: "Sends an image of a cat"
			},
			prompts: {},
			returns: {}
		},
		dog: {
			help: {
				usage: "None",
				description: "Sends an image of a dog"
			},
			prompts: {},
			returns: {}
		},
		space: {
			help: {
				usage: "None",
				description: "Sends an image of space"
			},
			prompts: {},
			returns: {}
		},
		snek: {
			help: {
				usage: "None",
				description: "Sends an image of a snek"
			},
			prompts: {},
			returns: {}
		},
		birb: {
			help: {
				usage: "None",
				description: "Sends an image of a birb"
			},
			prompts: {},
			returns: {}
		},
		catgirl: {
			help: {
				usage: "None",
				description: "Sends an image of a neko girl"
			},
			prompts: {},
			returns: {
				error: "Uh oh.",
				offline: "Looks like the nekos.life API is currently offline."
				+ "\nWe aren't able to fetch new pictures at the moment."
				+ "\nHere's a sleepy catgirl while we wait for it to come back online."
			}
		}
	},

	couples: {
		couple: {
			help: {
				usage: "[User]",
				description: "Get couple information about a user"
			},
			prompts: {
				invalidUser: "%username, that is not a valid user.",
				noInfo: "No couple info."
			},
			returns: {
				infoFor: "Couple info for %tag1 and %tag2",
				users: "Users",
				balance: "Balance"
			}
		},
		marry: {
			help: {
				usage: "<User>",
				description: "Propose to a user"
			},
			prompts: {
				noUser: "%username, you need to provide someone to propose to.",
				invalidUser: "%username, that is not a valid user.",
				selfMarried: "%username, you are already married.",
				userMarried: "%username, %user is already married.",
				selfProposed: "%username, you are already proposed to %tag",
				dmFailed: genewic.dm.blocked
			},
			returns: {
				proposed: "%username has successfully proposed to %tag. They can use %accept or %decline to marry or decline.",
				dmProposed: "%tag has proposed to you. You can use %accept or %decline to marry or decline."
			}
		},
		accept: {
			help: {
				usage: "<User>",
				description: "Accepts a proposal from a user."
			},
			prompts: {
				noUser: "%username, you need to provide someone to accept their proposal.",
				invalidUser: "%username, that is not a valid user.",
				noProposal: "%username, %tag has not proposed to you yet.",
				selfProposed: "%username, you cannot accept your own proposal.",
				selfMarried: "%username, you are already married.",
				userMarried: "%username, %user is already married.",
			},
			returns: {
				married: "%tag1 is now married to %tag2"
			}
		},
		decline: {
			help: {
				usage: "<User>",
				description: "Declines a proposal from a user."
			},
			prompts: {
				noUser: "%username, you need to provide someone to accept their proposal.",
				invalidUser: "%username, that is not a valid user.",
				noProposal: "%username, %tag has not proposed to you yet.",
				selfProposed: "%username, you cannot decline your own proposal.",
				selfMarried: "%username, you are already married.",
				userMarried: "%username, %user is already married.",
			},
			returns: {
				declines: "%tag1 has declined %tag2's marriage proposal."
			}
		},
		divorce: {
			help: {
				usage: "[reason]",
				description: "Divorces a user"
			},
			prompts: {
				notMarried: "%username, you are not married to anyone.",
				dmFailed: genewic.dm.blocked
			},
			returns: {
				divorced: "%tag1 has filed for a divorce from %tag2: %reason",
				dm: "%tag has filed for a divorce from you: %reason"
			}
		},
		bank: {
			help: {
				usage: "[User]",
				description: "View the balance of a couple"
			},
			prompts: {
				selfNotMarried: "%username, you are not married to anyone.",
				userNotMarried: "%username, %tag is not married to anyone.",
				dmFailed: genewic.dm.blocked
			},
			returns: {
				balance: "Couple balance for %tag1 and %tag2"
			}
		},
		withdraw: {
			help: {
				usage: "[amount: number|all|half]",
				description: "Withdraw money from your couple balance"
			},
			prompts: {
				notMarried: "%username, you are not married to anyone.",
				noMoney: "%username, there is no amandollars to withdraw.",
				invalidAmount: "%username, that is not a valid amount.",
				amountSmall: "%username, you must provide a number greater than 0.",
				amountLarge: "%username, you cannot withdraw more than what is in the couple balance."
			},
			returns: {
				success: "%username, successfully transacted %amount to your balance"
			}
		},
		deposit: {
			help: {
				usage: "[amount: number|all|half]",
				description: "Deposit money to your couple balance"
			},
			prompts: {
				notMarried: "%username, you are not married to anyone.",
				noMoney: "%username, you do not have any amandollars to deposit.",
				invalidAmount: "%username, that is not a valid amount.",
				amountSmall: "%username, you must provide a number greater than 0.",
				amountLarge: "%username, you do not have that many amandollars."
			},
			returns: {
				success: "%username, successfully transacted %amount from your balance"
			}
		},
		coupleleaderboard: {
			help: {
				usage: "[local] [page: number]",
				description: "Displays the leaderboard of the richest couples"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				pageLimit: "%username, you may only browse up to page %maxPages."
			},
			returns: {
				emptyPage: "There are only %lastPage pages to browse through.",
				pageCurrent: "Page %current of %total"
			}
		}
	},

	interaction: {
		ship: {
			help: {
				usage: "<user 1> <user 2>",
				description: "Ships two people uwu"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`,
				permissionDenied: `${genewic.command.permPre} attach files. ${genewic.command.permPost}`,
				invalidUsers: `%username, chu need to pwovide towo users as arguments`,
				invalidUser1: `%username: da first member provided was not found ( ・◇・)？`,
				invalidUser2: `%username, the second member provided was not found ◔_◔`,
				selfShip: "%username, chu can't ship someone with themselves, siwwy biwwy",
			},
			returns: {
				rating: "OWO. I'd rate %display1 and %display2 being together a %percentage%"
			}
		},
		bean: {
			help: {
				usage: "<user>",
				description: "Beans a user "
			},
			prompts: {
				guildOnly: "%username, chu can't bean someone in DMs, baka",
				invalidUser: `%username, ${genewic.command.input.invalid} user ( ﾟдﾟ)`,
				selfBean: "%username, chu can't bean churself, silly"
			},
			returns: {
				beaned: "%tag has been banned! (=゜ω゜)"
			}
		},
		hug: {
			help: {
				usage: "<user>",
				description: "Hugs someone"
			},
			prompts: {
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
			},
			returns: {
				amanda: "**Hugs %username back** :heart:",
				action: "%username hugged %mention"
			}
		},
		nom: {
			help: {
				usage: "<user>",
				description: "Noms someone"
			},
			prompts: {
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
			},
			returns: {
				amanda: "owie",
				action: "%username nommed %mention"
			}
		},
		kiss: {
			help: {
				usage: "<user>",
				description: "Kisses someone"
			},
			prompts: {
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
			},
			returns: {
				amanda: "**Kisses %username back** :heart:",
				action: "%username kissed %mention"
			}
		},
		cuddle: {
			help: {
				usage: "<user>",
				description: "Cuddles someone"
			},
			prompts: {
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
			},
			returns: {
				amanda: "**Cuddles %username back** :heart:",
				action: "%username cuddled %mention"
			}
		},
		poke: {
			help: {
				usage: "<user>",
				description: "Pokes someone"
			},
			prompts: {
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
			},
			returns: {
				amanda: "Dun poke me ; ^ ;",
				action: "%username poked %mention"
			}
		},
		slap: {
			help: {
				usage: "<user>",
				description: "Slaps someone"
			},
			prompts: {
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
			},
			returns: {
				amanda: "**Slaps %username back** That hurt me ; ^ ;",
				action: "%username slapped %mention"
			}
		},
		boop: {
			help: {
				usage: "<user>",
				description: "Boops someone"
			},
			prompts: {
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
			},
			returns: {
				amanda: "Dun boop me ; ^ ;",
				action: "%username booped %mention"
			}
		},
		pat: {
			help: {
				usage: "<user>",
				description: "Pats someone"
			},
			prompts: {
				dm: genewic.image.dm,
				noUser: genewic.image.noUser,
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
			},
			returns: {
				amanda: "≥ w ≤",
				action: "%username patted %mention"
			}
		}
	},

	meta: {
		statistics: {
			help: {
				usage: "[music|games]",
				description: "Displays detailed statistics for nerds"
			},
			prompts: {
				slow: "Ugh. I hate it when I'm slow, too"
			},
			returns: {
				songsToday: "**❯ Songs played today:**\n%number",
				songsQueued: "**❯ Song queued:**\n%number",
				voiceConnections: "**❯ Voice connections:**\n%number",
				usersListening: "**❯ Users listening:**\n%number",
				gamesToday: "**❯ Games played today:**\n%number",
				gamesInProgress: "**❯ Games in progress:**\n%number",
				usersPlaying: "**❯ Users Playing:**\n%number",
				heartbeat: "Heartbeat",
				latency: "Latency",
				uptime: "Uptime",
				ramUsage: "RAM usage",
				userCount: "**❯ User count:**\n%number",
				guildCount: "**❯ Server count:**\n%number",
				channelCount: "**❯ Channel count:**\n%number",
			}
		},
		ping: {
			help: {
				usage: "None",
				description: "What do chu think this does?"
			},
			prompts: {},
			returns: {
				pong: "Pong!",
				heartbeat: "❯ Heartbeat",
				latency: "❯ Latency",
				footer: "W-Wait... It's called table tennis"
			}
		},
		invite: {
			help: {
				usage: "None",
				description: "Add Amanda to a server owo"
			},
			prompts: {},
			returns: {
				invited: "I've been invited?",
				link: "Invite link: %link",
				notice: "Wemember, chu need **manage server** permwissions to be able to add bots to a server."
			}
		},
		info: {
			help: {
				usage: "None",
				description: "Displays information about Amanda"
			},
			prompts: {},
			returns: {
				thanks: "Thank chu for choosing me as chur companion! :heart:\nHere's a wittle bit of info about me...",
				creators: "Cweators",
				links: "Visit Amanda's [website](%website) or her [support server](%server)\nWanna donate? Check out her [Patreon](%patreon) or mwake a 1 time donation thwough [PayPal](%paypal).\nWanna see Amanda's gwowth over time? Chu can [here](%stats)"
			}
		},
		donate: {
			help: {
				usage: "None",
				description: "Get information on how to donate"
			},
			prompts: {},
			returns: {
				intro: "Thinking of donating? owo ❤",
				description: "I'm excited that chu're interested in supporting my cweators!"
				+"\n\nIf chu're interested in mwaking monthwy donations, chu can do so on [Patreon](%patreon),"
				+" or if chu'd wike to make a one time donation, chu can donate thwough [PayPal](%paypal)."
				+"\n\nAww money donated will go back into devewopment."
				+"\nAccess to Amanda's features will not change regardwess of chur choice,"
				+" but chu will wecieve a donor role in our [Support Server](%server)"
				+" and get a distingwishing donor badge on &profile."
			}
		},
		commits: {
			help: {
				usage: "None",
				description: "Gets the latest git commits to Amanda"
			},
			prompts: {},
			returns: {}
		},
		privacy: {
			help: {
				usage: "None",
				description: "Details Amanda's privacy statement"
			},
			prompts: {
				dmSuccess: genewic.dm.success
			},
			returns: {} // intentionally empty as Privacy policies might not translate properly and may have different implications
		},
		user: {
			help: {
				usage: "[user]",
				description: "Provides information about a user"
			},
			prompts: {
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
			},
			returns: {}
		},
		avatar: {
			help: {
				usage: "[user]",
				description: "Gets a user's avatar"
			},
			prompts: {
				invalidUser: `%username, ${genewic.command.input.invalid} user.`
			},
			returns: {}
		},
		icon: {
			help: {
				usage: "None",
				description: "Gets a server's icon"
			},
			prompts: {
				guildOnly: `%username, ${genewic.command.guildOnly}`
			},
			returns: {}
		},
		wumbo: {
			help: {
				usage: "<emoji>",
				description: "Makes an emoji bigger"
			},
			prompts: {
				invalidEmoji: `%username, ${genewic.command.input.invalid} emoji.`
			},
			returns: {}
		},
		profile: {
			help: {
				usage: "[user]",
				description: "Gets profile information about a user"
			},
			prompts: {
				invalidUser: `%username, ${genewic.command.input.invalid} user.`,
				permissionDenied: `${genewic.command.permPre} attach files. ${genewic.command.permPost}`
			},
			returns: {}
		},
		help: {
			help: {
				usage: "[Command|Categowy]",
				description: "Chur avewage hewp command"
			},
			prompts: {
				invalidCommand: "**%tag**, I couldn't find the help pwanel for that command"
			},
			returns: {
				footer: "Type `&help [command]` to see more infowmation about a command",
				mobile: "Cwick the weaction for a mobile-compwatible view",
				main: "Type `&help [categowy]` to see all commands in that categowy."
				+ "\nType `&help [command]` to see more infowmation about a command.",
				info: "Type `&info` to see general information about Amanda.\nFor more, join our support server: %link"
			}
		}
	},

	audio: {
		token: {
			help: {
				usage: "[new|delete]",
				description: "Obtain a web dashboawd wogin token"
			},
			prompts: {
				dmFailed: genewic.dm.fail,
				none: "chu do not cuwwently have any tokens. Use `&musictoken new` to genewate a new one."
			},
			returns: {
				dmSuccess: genewic.dm.success,
				deleted: "Deweted aww chur tokens. Use `&musictoken new` to genewate a new one.",
				new: "chur existing tokens were deweted, and a new one was cweated."
				+"\nDo not shawe this token with anyone. If chu do accidentawwy shawe it, chu can use `&musictoken delete` to dewete it and keep chu safe."
				+"\nchu can now wog in! %website",
				generated: "Here is the token chu genewated pweviously:"
				+"\nchu can use `&musictoken delete` to dewete it, and `&musictoken new` to wegenewate it."
			}
		},
		frisky: {
			help: {
				usage: "[original|deep|chill|classics]",
				description: "Pway Frisky Radio: https://friskyradio.com"
			},
			prompts: {},
			returns: {
				schedule: "Frisky Radio ­— Schedule",
				footer: "Use &frisky [station] to pway a station"
			}
		},
		music: {
			help: {
				usage: "None. Chu're not supposed to see this.",
				description: "None. Chu're not supposed to see this."
			},
			prompts: {
				guildOnly: genewic.command.guildOnly,
				invalidSkips: "That is not a vawid amount of songs to skip",
				invalidSkipsAmount: "chu have to skip 1 or more songs",
				tooManySkips: "chu cannot skip mowe songs than are in the queue!",
				invalidAction: "%username, that's not a vawid action. If chu want to pway something, try `&music play <song>`.\nCheck out `&help music` and `&help playlists` for more things chu can do!",
				nothingPlaying: "%username, nothing is cuwwently pwaying.",
				noResults: "No results.",
				voiceChannelRequired: "%username, yoow need to join a voice channel to do that.",
				voiceCantJoin: "%username, I don't have permission to join chur voice channel.",
				voiceCantSpeak: "%username, I don't have permission to speak in chur voice channel.",
				playableRequired: "%username, please pwovide either a YouTube video wink or some words for me to search for.",
				youtubeRequired: "%username, please pwovide a YouTube wink or video ID.",
				queueCannotDo: "The cuwwent queue cannot be %action at this time.",
				voiceChannelWaiting: "%username, chu need to join a voice channel to do that. Waiting for chu to connect...",
				songSelection: "Song sewection",
				songSelectionCanceled: "Song sewection cancelled",
				totalLength: "Total wength: %number",
				queueFor: "Queue for %server",
				everyoneLeft: "Everyone left, so I have as well.",
				songNotPlayingDiscord: "Hmm. Seems like the song isn't playing."
				+ "\n\n**This is probably an issue with Discord.**"
				+ "\nYou should try changing the server region."
				+ "\n\nTo report a problem, join our server: https://discord.gg/YMkZDsK",
				songErrorExclaimation: "`song.track` is ! placeholder. This is a bug.",
				songErrorNull: "`song.track` is null or undefined. This is a bug.",
				songNotPlayable: "We couldn't play that song",
				errorOccured: "We ran into an error",
				songErrorNotObject: "Song is not an object %song",
				tooManyErrors: "Too many errors!",
				errorsSuppressed: "Future errors from this queue will be silenced."
				+ "\nIf any more songs fail, they will be skipped with no message."
				+ "\nTo report a bug, join our server: https://discord.gg/YMkZDsK",
				autoRanOut: "Auto mode is on, but we ran out of related songs and had to stop playback.",
				queueAlreadyPaused: "Music is already paused. Use `&music resume` to resume.",
				queueNowPlaying: "Now Playing: %song",
				noUsersLeft: "No users left in my voice channel. I will stop playing in %time seconds if nobody rejoins.",
				autoOn: "Auto mode is now turned on.",
				autoOff: "Auto mode is now turned off.",
				loopOn: "Loop mode is now turned on.",
				loopOff: "Loop mode is now turned off.",
				musicPlaying: "Music is playing. If chu want to pause, use `&music pause`.",
				songRemoveRequired: "Chu need to tell me which song to remove. `&music queue remove <number>`"
				+ "\nTo clear the entire queue, use `&music queue clear` or `&music queue remove all`.",
				songRemove1: "Item 1 is the currently playing song. Use `&music skip` to skip it, "
				+ "or `&music queue remove 2` if chu wanted to remove the song that's up next.",
				queueSongTotal: "There are %number1 items in the queue. Chu can only remove items 2-%number2.",
				numberNotInRelated: "The number chu typed isn't an item in the related list. Try `&music related`."
			},
			returns: {
				queueClear: "Cweared the queue, removing %number",
				queueIn: "The cuwwent music session is over in %channel. Go there to see what's pwaying!"
			}
		},
		playlist: {
			help: {
				usage: "None. Chu're not supposed to see this.",
				description: "None. Chu're not supposed to see this."
			},
			prompts: {
				playFromStart: "Pway the entire pwaywist from the start",
				playFromLinked: "Pway the pwaywist, starting at the winked song",
				playOnlyLinked: "Only pway the winked song",
				userLinked: "chu winked to this song in the pwaywist: %title",
				query: "What would chu wike to do?",
				selectionInfo: "To pway a more specific wange from the pwaywist, use `&music play <link> <start> <end>`. See `&help playlist` for mowe information.",
				playlistNameRequired: "%username, chu must name a pwaywist. Use `&music playlists show` to show aww pwaywists.",
				directPlaylist: "%username, chu can pway a pwaywist diwectly! Just pass it to \`&music play\` like so:"
				+"%info\n\n\n\nIf chu stiww want to import a pwaywist into Amanda, chu must give it a fwiendly name first, like `bobs_songs`.",
				playlistNameLimit: "%username, the pwaywist name must be 24 characters or wess.",
				playlistNotExist: "%username, That pwaywist does not exist. Use \`&music playlist %playlist create\` to cweate it.",
				databaseFixed: "%username, The database entwies for that pwaywist are inconsistent. The inconsistencies have been wesolved by wesetting the order of the songs in that pwaywist. Apart fwom the song order, no data was wost. Other pwaywists were not affected.",
				usePlaylistAdd: "Do not use pwaywist importing with `playlist add`. Use `playlist import` instead",
				youtubeLinkInvalid: "%username, That is not a vawid YouTube wink",
				indexRequired: "%username, Pwease pwovide the index of the item to wemove",
				indexMoveRequired: "%username, Pwease pwovide an index to move from and an index to move to.",
				playlistNotOwned: "%username, chu do not own that pwaywist and so, chu cannot modify it.",
				playlistDuplicateSong: "%username, that song is alweady in the pwaywist.",
				indexesEqual: "%username, Those two indexes are eqwal.",
				playlistEmpty: "That pwaywist is empty. Add some songs with `&music playlist %playlist add <song>`!",
				playlistImporting: "Importing pwaywist. This could take a moment...\n(Fetching song info)",
				playlistImportAllExisting: "%username, all videos in that pwaywist have already been imported.",
				playlistImportingDatabase: "Importing pwaywist. This could take a moment...\n(Updating database)",
				playlistDeleteConfirm: "This action will permawentwy dewete the pwaywist `%playlist`."
				+ "\nYou cannot undo this action, and anywone will be abwe to cweate a new pwaywist with the same name."
				+ "\nPress <:bn_del:331164186790854656> to dewete `%playlist` fowewer (◔◡◔✿)",
				bulkListening: "Okay, I'm listening",
				bulkDescription: "» Type anything to add it to the playlist."
				+ `\n» Commands starting with \`%prefix\` will only run the command.`
				+ "\n» Type `undo` to remove the last item in the playlist.\u2002🧹"
				+ "\n» Type `stop` when chu're done. Chu can keep adding things until chu type `stop`.\u2002🛑",
				outOfRange: "Out of range.",
				playlistSection: "Playlist section",
				bulkMenuOpen: "Chu already have a menu open in here. Type `stop` to stop it.",
				playlistPages: "Page %number of %total"
			},
			returns: {
				playlistAdded: "%username, Added **%song** to pwaywist **%playlist**",
				playlistRemoved: "%username, Wemoved **%song** from pwaywist **%playlist**",
				playlistCreated: "%username, Cweated pwaywist **%playlist**",
				playlistImportDone: "All done! Check out chur pwaywist with **&music playlist %playlist**.",
				playlistDeleted: "Pwaywist deweted.",
				playlistDeleteCancelled: "Playlist deletion cancelled",
				playlistMoved: "%username, Moved **%song** to position **%index**",
				bulkDone: "All done! I won't add anything else to the playlist.",
				bulkMenuGone: "(There used to be a menu here, but it's gone now.)"
			}
		},
		debug: {
			help: {
				usage: "[Channel]",
				description: "Pwovides debugging infowmation for if audio commands are not working as intended"
			},
			prompts: {
				guildOnly: "Chu cannot debug music in a DM channel",
				invalidChannel: "Channel not fwound"
			},
			returns: {
				tip: "Tip:",
				tipValue: "On top of Wead Message and Add Weaction permissions, bots must also have Wead Message History permissions to add weactions to messages",
				unnamedNode: "an unnamed node",
				queueUsing: "However, the current queue is using %name",
				infoFor: "Debugging info for %channel",
				permissions: "Permissions:",
				method: "Method:"
			}
		}
	},

	configuration: {
		settings: {
			help: {
				usage: "<self|server> <view|setting name> [value]",
				description: "Modify settings Amanda will use for chursewf or server wide"
			},
			prompts: {
				cantModifyInDM: "Chu cannot modify a server's settings if chu don't use the command in a server",
				backgroundRecommended: "Recommended to be a 800x500px png/jpeg",
				invalidSyntaxScope: "Command syntax is `&settings <scope> <name> <value>`. Chur value for `scope` was incorrect, it must be either `self` or `server`.",
				noSettings: "There are no settings set for scope %scope",
				manageServer: "Chu must have either the Manage Server or Administrator permission to modify Amanda's settings on this server.",
				invalidSyntaxName: "Command syntax is `&settings %usage`. Chur value for `name` was incorrect, it must be one of: %settings",
				invalidSettingScope: "The setting `%setting` is not valid for the scope `%scope`.",
				currentValueServer: "Current value of `%setting` is `%value`. This value was set for the server.",
				currentValueInherited: "Current value of `%setting` is not set in this server, so it inherits the default value, which is `%value`.",
				noBackground: "Chu didn't have a profile background image. No action was taken.",
				donorRequired: "Chu must be a donor to modify this setting.",
				invalidLink: "There was an error trying to fetch the data from the link provided. Please make sure the link is valid.",
				invalidLangCode: "%username, that is not a valid or supported language code. Supported language codes are %codes",
				invalidSyntaxBoolean: "Command syntax is `&settings <scope> <name> <value>`. The setting `%setting` is a boolean, and so chur `%value` must be either `true` or `false`.",
				tooLong: "That setting value is too long. It must not be more than 50 characters."
			},
			returns: {
				updated: "Setting updated.",
				deleted: "Setting deleted."
			}
		},
		language: {
			help: {
				usage: "<cowode>",
				description: "Sets da language dat Amanda will use to talk to chu owo"
			},
			prompts: {},
			returns: {}
		},
		serverlanguage: {
			help: {
				usage: "<cowode>",
				description: "Sets da language dat Amanda will use in chur server uwu"
			},
			prompts: {},
			returns: {}
		},
		background: {
			help: {
				usage: "<url>",
				description: "Sets da backgwound dispwayed on &profile"
			},
			prompts: {},
			returns: {}
		}
	}
};
