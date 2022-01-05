package com.tomas.controladores;

import java.util.ArrayList;

import com.tomas.entidades.ToDo;
import com.tomas.requestBody.ToDoRequest;
import com.tomas.servicios.ToDoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
@RequestMapping("/todo")
public class ToDoController {

	@Autowired
	ToDoService taskService;

	@GetMapping()
	public ArrayList<ToDo> getToDo() {
		return taskService.getToDo();
	}

	@GetMapping(path = "/{id}")
	public ArrayList<ToDo> getToDobyFolder(@PathVariable("id") Long id) {

		return taskService.getToDobyFolder(id);
	}

	@PostMapping
	public ToDo saveTask(@RequestBody ToDoRequest request) {

		return taskService.saveToDo(request);
	}

	@PostMapping(path = "/{id}/isComplete/{isCompleted}")
	public void changeIsCompleted(@PathVariable("id") Long id, @PathVariable("isCompleted") Integer isCompleted) {

		taskService.changeIsCompleted(id, isCompleted);
	}

	@PostMapping(path = "/{id}/description/{description}")
	public void changeName(@PathVariable("id") Long id, @PathVariable("description") String description) {

		taskService.changeName(id, description);
	}
}
