const progress = document.querySelector('.progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const circles = document.querySelectorAll('.circle');

let currentOn = 1;

next.addEventListener('click', () => {
	currentOn++;
	if (currentOn > circles.length) {
		currentOn = circles.length;
		// 위의 if 문 내용은 circles의 길이가 클릭시 4이상이 될경우에도
		// 커지지않고 원래 길이인 4로 유지시켜주는 내용
	}
	update();
});

prev.addEventListener('click', () => {
	currentOn--;
	if (currentOn < 1) {
		currentOn = 1;
		// 위의 if 문 내용은 circles의 길이가 클릭시 1이하가 될경우에도
		// 더이상 작아지지않고 원래 길이인 1로 유지시켜주는 내용
	}
	update();
});

function update() {
	//circle에 반복을 돌면서 currentOn과
	//circle의 인덱스를 비교해서 활성화 클래스를 붙이거나 떼어준다
	// 1. 클릭할때 써클의 색넣기(활성화)
	circles.forEach((el, index) => {
		if (index < currentOn) {
			el.classList.add('on');
			//next를 누를경우 on만붙여줍니다
			//왜냐하면 index는 항상 currentOn보다 작습니다
		} else {
			el.classList.remove('on');
			//prev를 누를경우 on이 사라집니다
			//왜냐하면 currentOn과 index의 값이 같아지기 때문입니다
			//currentOn == index는 (index < currentOn)조건에
			//거짓이기 때문에 else의 코드가 작동합니다
		}
	});
	// 2. 선에 색 주기
	const actives = document.querySelectorAll('.on');
	progress.style.width =
		((actives.length - 1) / (circles.length - 1)) * 100 + '%';

	// 3. 디스에이블드 변경하기
	if (currentOn === 1) {
		prev.disabled = true;
	} else if (currentOn === circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}
