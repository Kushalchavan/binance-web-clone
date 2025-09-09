const NewsCard = () => {
  return (
    <div className="h-72 ring ring-gray-400/20 rounded-md p-6 flex flex-col justify-between bg-gray-100/40 dark:bg-gray-800/50">
      <div className="flex justify-between items-center">
        <span className="font-bold dark:text-white">News</span>
        <span className="text-gray-400 text-xs cursor-pointer">
          View All News {">"}
        </span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <p className="text-base text-gray-600 dark:text-gray-200 dark:hover:text-gray-300 hover:text-gray-500 cursor-pointer">
          Capital B Secures €5 Million to Enhance Bitcoin Reserve Strategy
        </p>

        <p className="text-base text-gray-600 dark:text-gray-200 dark:hover:text-gray-300 hover:text-gray-500 cursor-pointer">
          Binance Alpha to Feature OpenLedger (OPEN), Airdrop 200 OPEN Tokens to
          Eligible Users
        </p>

        <p className="text-base text-gray-600 dark:text-gray-200 dark:hover:text-gray-300 hover:text-gray-500 cursor-pointer">
          Binance Introduces AI-Powered Trading Signals on Wallet
        </p>

        <p className="text-base text-gray-600 dark:text-gray-200 dark:hover:text-gray-300 hover:text-gray-500 cursor-pointer">
          Binance to Launch WLFIUSDC Perpetual Contract with 75x Leverage
        </p>
      </div>
    </div>
  );
};
export default NewsCard;
