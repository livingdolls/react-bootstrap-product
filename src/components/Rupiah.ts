const Rupiah = (angka: number) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(Number(angka));
};

export default Rupiah;
